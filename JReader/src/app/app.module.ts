import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { TituloDirective } from './directives/titulo.directive';
import { ConteudoDirective } from './directives/conteudo.directive';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import { InputFileComponent } from './components/input-file/input-file.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { AviaoComponent } from './components/aviao/aviao.component';
import { DetalhaAviaoComponent } from './components/aviao/detalha-aviao/detalha-aviao.component';
import { BarcoComponent } from './components/barco/barco.component';
import { DetalhaBarcoComponent } from './components/barco/detalha-barco/detalha-barco.component';
import { CarroComponent } from './components/carro/carro.component';
import { DetalhaCarroComponent } from './components/carro/detalha-carro/detalha-carro.component';
import { RodapeComponent } from './components/rodape/rodape.component';

@NgModule({
  declarations: [
    TituloDirective,
    ConteudoDirective,
    AppComponent,
    InputFileComponent,
    CategoriaComponent,
    AviaoComponent,
    DetalhaAviaoComponent,
    BarcoComponent,
    DetalhaBarcoComponent,
    CarroComponent,
    DetalhaCarroComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
