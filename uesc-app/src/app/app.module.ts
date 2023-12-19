import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { DestaqueComponent } from './destaque/destaque.component';
import { ServicoComponent } from './servico/servico.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiaComponent,
    DestaqueComponent,
    ServicoComponent,
    ResultadoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
