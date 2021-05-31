
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transfer } from '../interfaces/transfer';

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  public url: any = environment.URL_LOCAL;
  constructor(private http: HttpClient) {
  }

  findTransfersAddressee = ():Observable<any> => {
    return this.http.get(`${this.url}/transfers/find`);
  }

  createTransfers = (data: Transfer): Observable<any> => {
    const json = {
      addresseeId: data.addresseeId,
      amount: data.amount,
    }
    return this.http.post(`${this.url}/transfers/create`, json);
  }
}
