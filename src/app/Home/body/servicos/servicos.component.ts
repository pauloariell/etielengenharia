import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ee-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {
  servicos = [
    {
      img: './assets/image/regularizacao_de_Imoveis.jpg',
      titulo: 'Regularização de Imóveis',
      descricao:'Regularização de Imóveis',
      active: 'active'
    },
    {
      img: './assets/image/vistorias_de _obras.jpg',
      titulo: 'Vistorias de Obras',
      descricao:'Vistorias de Obras',
      active: ''      
    },
    {
      img: './assets/image/calculo_do_valor_de_renovacao_de_locacao.jpg',
      titulo: 'Cálculo do valor de renovação de locação',
      descricao:'Cálculo do valor de renovação de locação',
      active: ''
    },
    {
      img: './assets/image/laudos_de_avaliacoes_de_imoveis.jpg',
      titulo: 'Laudos de Avaliações de Imóveis',
      descricao:'Laudos de Avaliações de Imóveis',
      active: ''
    },
    {
      img: './assets/image/pericia_engenharia.jpg',
      titulo: 'Perícias de Engenharia',
      descricao:'Perícias de Engenharia',
      active: ''
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
