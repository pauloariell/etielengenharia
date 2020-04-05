import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicosComponent } from './servicos/servicos.component';
import { SobreComponent } from './sobre/sobre.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { TrabalheConoscoComponent } from './trabalhe-conosco/trabalhe-conosco.component';
import { ContatoComponent } from './contato/contato.component';



@NgModule({
  declarations: [
    ContatoComponent, 
    ServicosComponent, 
    SobreComponent,
    NoticiasComponent,
    TrabalheConoscoComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    ContatoComponent,
    ServicosComponent,
    SobreComponent,
    NoticiasComponent,
    TrabalheConoscoComponent
  ]
})
export class BodyModule { }
