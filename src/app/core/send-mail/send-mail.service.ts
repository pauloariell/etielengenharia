import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface contactUs {
  name: string;
  email: string;
  phone: string;
  description: string;
  fileAttachment?: fileAttachment
}

interface fileAttachment{
  filename: string,
  content: string
}
@Injectable({
  providedIn: 'root',
})
export class SendMailService {
  url_dev = 'http://localhost:3001/api';
  url_prd = 'https://etielengenharia-api.herokuapp.com/api';

  constructor(private _http: HttpClient) {}

  sendMessage({ name, email, phone, description }: contactUs) {
    const data = { name, email, phone, description };

    let URL_API = '';
    if (isDevMode) {
      URL_API = this.url_dev;
    } else {
      URL_API = this.url_prd;
    }
    URL_API = this.url_prd;
    console.log(`[URL_API]${URL_API}`);

    console.log(JSON.stringify(data));
    return this._http.post(`${URL_API}/sendmail`, data);
  }

  sendMailWorkwithUs({ name, email, phone, description, fileAttachment }: contactUs) {
    const data = { name, email, phone, description, fileAttachment };

    let URL_API = '';
    if (isDevMode) {
      URL_API = this.url_dev;
    } else {
      URL_API = this.url_prd;
    }
    URL_API = this.url_prd;
    console.log(`[URL_API]${URL_API}`);

    console.log(JSON.stringify(data));
    return this._http.post(`${URL_API}/sendMailWorkwithUs`, data);
  }
}
