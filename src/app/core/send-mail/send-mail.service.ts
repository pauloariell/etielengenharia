import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {
  url_dev = 'http://localhost:3001/api';
  url_prd = 'https://etielengenharia-api.herokuapp.com/api'

  constructor(private _http: HttpClient) { }


sendMessage(data) {
  let URL_API = '';
  if (isDevMode) {
    URL_API = this.url_dev;
  } else {
    URL_API = this.url_prd;
  }
  URL_API = this.url_prd;
  console.log(`[URL_API]${URL_API}`)

  // const body = {
  //   emailto: data.email,
  //   subject: "[SITE] Contato Etiel",
  //   name:data.name,
  //   text: `Você tem um novo contato\n
  //           Nome: ${data.name}\n
  //           E-mail:${data.email}\n
  //           Telefone:${data.phone}\n
  //           Assunto:${data.description}`
  // }
  console.log(JSON.stringify(data));
  return this._http.post(`${URL_API}/sendmail`, data);
}
}