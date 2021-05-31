import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { Addressee } from 'src/app/interfaces/addressee';
import { AccountService } from 'src/app/services/account.service';
import { AddresseeService } from 'src/app/services/addressee.service';

@Component({
  selector: 'app-addressee',
  templateUrl: './addressee.component.html',
  styleUrls: ['./addressee.component.scss']
})
export class AddresseeComponent implements OnInit {
  public databanks: any = {
    banks: [],
  };
  public dataAccount: any = {
    accounts: [],
  };
  public loading = false;
  public addresseeForm: any;

  constructor(
    private _addresseeService: AddresseeService,
    private _accountService: AccountService,
    private _formBuilder: FormBuilder
  ) {
    this.addresseeForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      rut: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[0-9]+K")]],
      mail: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      bank: ['', [Validators.required]],
      accountType: ['', [Validators.required]],
      accountNumber: ['', [Validators.required]],
    });
   }

  ngOnInit(): void {
    const getbank = this._addresseeService.getBank()
    const getAccount = this._accountService.findAccount()
    forkJoin([getbank, getAccount])
    .subscribe(result => {
      this.databanks = result[0];
      result[1].data.forEach((account: any) => {
      this.dataAccount.accounts.push(account.name);
      });
      this.loading = true;
    }, error => {
      this.loading = true;
      console.log(error);
    })
  }

  createAddressee = (data: Addressee) => {
    this._addresseeService.createAddresse(data)
      .subscribe(result => {
        this.addresseeForm.reset();
        console.log(result);
      }, error => {
        console.log('error: ', error);
      })
  }

  onSubmit() {
    
    const addresseeData = {
      name: this.addresseeForm.value.name,
      rut: this.addresseeForm.value.rut,
      phone: this.addresseeForm.value.phone,
      mail: this.addresseeForm.value.mail,
      bankId: this.addresseeForm.value.bank.id,
      bankName: this.addresseeForm.value.bank.name,
      accountType: this.addresseeForm.value.accountType,
      accountNumber: +this.addresseeForm.value.accountNumber
    }
    this.createAddressee(addresseeData);
  }
}
