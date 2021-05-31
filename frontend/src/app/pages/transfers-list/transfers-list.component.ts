import { Component, OnInit } from '@angular/core';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-transfers-list',
  templateUrl: './transfers-list.component.html',
  styleUrls: ['./transfers-list.component.scss']
})
export class TransfersListComponent implements OnInit {

  public dataTransfer: any[] = [];
  public titles: any[] = [];
  public loading = false;

  constructor(
    private _transfersListService: TransferService
  ) { }

  ngOnInit(): void {
    this._transfersListService.findTransfersAddressee()
      .subscribe((result) => {
        const { data } = result;
        this.titles = data.titles;
        this.dataTransfer = data.transfAddresse;
        this.loading = true;
    }, (error) => {
        console.log(error);
      })

  }

}
