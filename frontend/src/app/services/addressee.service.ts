import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Addressee } from '../interfaces/addressee';

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class AddresseeService {
  public url: any = environment.URL_LOCAL;
  constructor(private http: HttpClient) {
  }

  getBank = ():Observable<any> => {
    return this.http.get('https://bast.dev/api/banks.php');
  }

  findAddresse = ():Observable<any> => {
    return this.http.get(`${this.url}/addressee/find`);
  }

  createAddresse = (data: Addressee): Observable<any> => {
    const json = {
      name: data.name,
      rut: data.rut,
      mail: data.mail,
      phone: data.phone,
      bankId: data.bankId,
      bankName: data.bankName,
      accountType: data.accountType,
      accountNumber: data.accountNumber
    }
    return this.http.post(`${this.url}/addressee/create`, json);
  }
}
