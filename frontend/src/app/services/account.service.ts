

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public url: any = environment.URL_LOCAL;
  constructor(private http: HttpClient) {
  }

  findAccount = ():Observable<any> => {
    return this.http.get(`${this.url}/account/find`);
  }
}
