import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UescComponent } from './uesc.component';
import { DestaqueComponent } from './components/destaque/destaque.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { ServicoComponent } from './components/servico/servico.component';

@NgModule({
  declarations: [
    UescComponent,
    DestaqueComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    NoticiaComponent,
    ResultadoComponent,
    ServicoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UescComponent,
    DestaqueComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    NoticiaComponent,
    ResultadoComponent,
    ServicoComponent
  ]
})
export class UescModule { }
