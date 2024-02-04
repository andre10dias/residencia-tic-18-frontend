import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AviaoComponent } from './aviao/aviao.component';
import { CarroComponent } from './carro/carro.component';
import { BarcoComponent } from './barco/barco.component';
import { InputFileComponent } from './input-file/input-file.component';
import { RodapeComponent } from './rodape/rodape.component';

import { CategoriaComponent } from './categoria/categoria.component';
import { DetalhaAviaoComponent } from './aviao/detalha-aviao/detalha-aviao.component';
import { DetalhaCarroComponent } from './carro/detalha-carro/detalha-carro.component';
import { DetalhaBarcoComponent } from './barco/detalha-barco/detalha-barco.component';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { TituloDirective } from './titulo.directive';
import { ConteudoDirective } from './conteudo.directive';

@NgModule({
  declarations: [
    AppComponent,
    AviaoComponent,
    CarroComponent,
    BarcoComponent,
    InputFileComponent,
    RodapeComponent,
    CategoriaComponent,
    DetalhaAviaoComponent,
    DetalhaCarroComponent,
    DetalhaBarcoComponent,
    TituloDirective,
    ConteudoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
