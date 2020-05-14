import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { TrabalheConoscoComponent } from './pages/trabalhe-conosco/trabalhe-conosco.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { EmBreveComponent } from './pages/em-breve/em-breve.component';

const routes: Routes = [
  { path: '', redirectTo: 'embreve', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'nossa-historia', component: HistoriaComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'trabalhe-conosco', component: TrabalheConoscoComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'embreve', component: EmBreveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
