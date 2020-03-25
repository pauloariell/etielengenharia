import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ee-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {
  servicos = [
    {
      img: './assets/image/pericia_engenharia.jpg',
      titulo: 'Perícias de Engenharia',
      descricao:'Judiciais, extrajudiciais, cautelares, arbitrárias, em Edificações, em ações reais imobiliárias, etc',
      active: 'active'
    },
    {
      img: './assets/image/regularizacao_de_Imoveis.jpg',
      titulo: 'Avaliações de Imóveis - Urbanos e Rurais',
      descricao:'Garantias, Patrimoniais, Desapropriação, Revisional de Aluguel, Renovatória de contrato de locação, etc',
      active: ''
    },
    {
      img: './assets/image/vistorias_de _obras.jpg',
      titulo: 'Vistorias de obras',
      descricao:' Medições, entregas de obras, vistorias de constatação / Análise comparativa de conformidade / Causalidade, etc',
      active: ''      
    },
    {
      img: './assets/image/calculo_do_valor_de_renovacao_de_locacao.jpg',
      titulo: 'Regularização de imóvel',
      descricao:'Acompanhamento de entrega de documentações, relatório técnico de vistoria, conformidades, projetos, etc',
      active: ''
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
