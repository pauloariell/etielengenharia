import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmBreveComponent } from './em-breve/em-breve.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { ServicosComponent } from './servicos/servicos.component';
import { PericiaComponent } from './servicos/pericia/pericia.component'
import { HistoriaComponent } from './historia/historia.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { TrabalheConoscoComponent } from './trabalhe-conosco/trabalhe-conosco.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoadingModule } from '../shared/components/loading/loading.module';
import { AvaliacaoComponent } from './servicos/avaliacao/avaliacao.component';

import { InvalidFeedbackModule } from '../shared/components/invalid-feedback/invalid-feedback.module';
import { EnviarcvComponent } from './trabalhe-conosco/enviarcv/enviarcv.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    LoadingModule ,
    InvalidFeedbackModule
  ],
  declarations: [
    EmBreveComponent,
    HomeComponent,
    ContatoComponent,
    ServicosComponent,
    PericiaComponent,
    HistoriaComponent,
    NoticiasComponent,
    TrabalheConoscoComponent,
    AvaliacaoComponent,
    EnviarcvComponent
  ]
})
export class PagesModule { }
