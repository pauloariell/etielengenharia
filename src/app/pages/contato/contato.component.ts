import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private sendMailService: SendMailService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      phone: ['',[Validators.required]],
      description: ['',[Validators.required]],
    });
  }

  sendMail() {
    this.turnOnOverlay();

    if (this.contactForm.invalid) {
      this.turnOffOverlay()
      return;
    }
    
    console.log(`[DATA SUCESS]: ${JSON.stringify(this.contactForm.value)}`);
    
    const { name, email, phone, description } = this.contactForm.value;
    const body = {
      name, email, phone, description
    }

    this.sendMailService
      .sendMessage(body)
      .subscribe(
        () => {
          this.showOverlay = false;
          alert('deu bão');
          this.turnOffOverlay();
          this.contactForm.reset();
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
