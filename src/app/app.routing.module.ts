import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { TrabalheConoscoComponent } from './pages/trabalhe-conosco/trabalhe-conosco.component';
import { EnviarcvComponent } from './pages/trabalhe-conosco/enviarcv/enviarcv.component'
import { ContatoComponent } from './pages/contato/contato.component';
import { EmBreveComponent } from './pages/em-breve/em-breve.component';
import { PericiaComponent } from './pages/servicos/pericia/pericia.component';
import { AvaliacaoComponent } from './pages/servicos/avaliacao/avaliacao.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'servicos/pericia', component: PericiaComponent },
  { path: 'servicos/avaliacao', component: AvaliacaoComponent },
  { path: 'nossa-historia', component: HistoriaComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'trabalhe-conosco', component: TrabalheConoscoComponent },
  { path: 'trabalhe-conosco/enviar-cv', component: EnviarcvComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'embreve', component: EmBreveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
