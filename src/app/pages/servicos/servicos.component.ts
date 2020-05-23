import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'ee-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {
  servicos = [
    {
      img: 'assets/img/servico-1.jpg',
      titulo: 'Perícias de Engenharia',
      routerLink:'servicos/pericia'
    },
    {
      img: 'assets/img/no-image.jpg',
      titulo: 'Avaliações de Imóveis',
      routerLink:'servicos/avaliacao'
    },
    // {
    //   img: 'assets/img/servico-1.jpg',
    //   titulo: 'Perícias de Engenharia',
    //   descricao:'Judiciais, extrajudiciais, cautelares, arbitrárias, em Edificações, em ações reais imobiliárias, etc'
    // },
    // {
    //   img: 'assets/img/servico-1.jpg',
    //   titulo: 'Perícias de Engenharia',
    //   descricao:'Judiciais, extrajudiciais, cautelares, arbitrárias, em Edificações, em ações reais imobiliárias, etc'
    // },
    // {
    //   img: 'assets/img/servico-1.jpg',
    //   titulo: 'Perícias de Engenharia',
    //   descricao:'Judiciais, extrajudiciais, cautelares, arbitrárias, em Edificações, em ações reais imobiliárias, etc'
    // },
    // {
    //   img: 'assets/img/servico-1.jpg',
    //   titulo: 'Perícias de Engenharia',
    //   descricao:'Judiciais, extrajudiciais, cautelares, arbitrárias, em Edificações, em ações reais imobiliárias, etc'
    // },
    // {
    //   img: 'assets/img/servico-1.jpg',
    //   titulo: 'Perícias de Engenharia',
    //   descricao:'Judiciais, extrajudiciais, cautelares, arbitrárias, em Edificações, em ações reais imobiliárias, etc'
    // },
    // {
    //   img: 'assets/img/servico-1.jpg',
    //   titulo: 'Perícias de Engenharia',
    //   descricao:'Judiciais, extrajudiciais, cautelares, arbitrárias, em Edificações, em ações reais imobiliárias, etc'
    // },
  ];

  constructor() { }
  ngOnInit(): void { }

}
