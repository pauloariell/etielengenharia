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
  constructor() { }

  ngOnInit(): void {
  }

}
