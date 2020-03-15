import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ee-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  assuntos: string[] = [
    'Trabalhe conosco',
    'Comercial',
    'Dúvidas',
    'Financeiro',
    'Fornecedores',
    'Administrativo'
  ]

  imgContact = "assets/image/contact-us-3.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
