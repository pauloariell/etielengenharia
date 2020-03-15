import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ee-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  assuntos: string[] = [
    'Contato para Empresas',
    'Contato para pessoas físicas',
    'Para Vagas de Estágio'
  ]

  imgContact = "assets/image/contact-us-3.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
