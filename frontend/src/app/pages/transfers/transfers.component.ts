import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Transfer } from 'src/app/interfaces/transfer';
import { AddresseeService } from 'src/app/services/addressee.service';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss']
})
export class TransfersComponent implements OnInit {
  public transferForm: any;
  public addresseData: any[] = [];

  constructor(
    private _transferService: TransferService,
    private _addresseeService: AddresseeService,
    private _formBuilder: FormBuilder
    ) {
    this.transferForm = this._formBuilder.group({
      user: ['', [Validators.required]],
      bankName: ['', [Validators.required]],
      accountType: ['', [Validators.required]],
      amount: ['', Validators.required],
    });
    
    this.transferForm.controls['bankName'].disable();
    this.transferForm.controls['accountType'].disable();
    }

  ngOnInit(): void {
    this._addresseeService.findAddresse()
    .subscribe(result => {
      this.addresseData = result.data
      console.log(result.data);
    }, error => {
      console.log(error);
    })
  }

  selectedAddressee(data: any){
    this.transferForm.controls['bankName'].setValue(data.bank_receiving.bankName);
    this.transferForm.controls['accountType'].setValue(data.bank_receiving.accounts.type);
  }

  validateAmount(data: any){
    if (data <= 0){
      this.transferForm.controls['amount'].setValue();
    }
  }

  onSubmit() {
    const data = {
      addresseeId: this.transferForm.value.user._id,
      amount: this.transferForm.value.amount,
    }
    this.createTransfers(data);
  }

  createTransfers = (data: Transfer) => {
    this._transferService.createTransfers(data)
      .subscribe(result => {
        this.transferForm.reset();
      }, error => {
        console.log('error: ', error);
      })
  }

}
