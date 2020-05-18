import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class SendMailService {
 
  constructor(private _http: HttpClient) {}
 
  sendMessage(body) {
    return this._http.post('https://etielengenharia-api.herokuapp.com/api/sendmail', body);
  }
}