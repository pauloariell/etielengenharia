import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';
import { SendMailService } from 'src/app/core/send-mail/send-mail.service'

@Component({
  selector: 'ee-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {
  public showOverlay = false;
  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sendMailService: SendMailService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: [
        '',
        Validators.required
      ],
      email: [
        '',
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ]
    });
  }

  sendMail() {
    const name = this.contactForm.get('name').value;
    const email = this.contactForm.get('email').value;

    const body = {
      "emailto": email,
      "subject": `[SITE] Contato nome:${name}`,
      "text": "teste de envio de email via aplicação"
    }
    
    this.turnOnOverlay();

    this.sendMailService
      .sendMessage(body)
      .subscribe(
        () => {
          this.showOverlay = false;
          alert('deu bão');
          this.turnOffOverlay();
        },
        err => {
          this.turnOffOverlay();
          console.log(err);
          alert("Não foi possivel enviar o e=mail");
        }
      );
  }

  turnOnOverlay() {
    this.showOverlay = true;
  };

  turnOffOverlay() {
    this.showOverlay = false;
  };
}
