import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from './contato/contato.component';
import { ServicosComponent } from './servicos/servicos.component';
import { SobreComponent } from './sobre/sobre.component';



@NgModule({
  declarations: [
    ContatoComponent, 
    ServicosComponent, 
    SobreComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    ContatoComponent,
    SobreComponent
  ]
})
export class BodyModule { }
