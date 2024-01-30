import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ConteudoDirective } from './conteudo.directive';
import { TituloDirective } from './titulo.directive';

import { JreaderComponent } from './jreader.component';
import { InputFileComponent } from './components/input-file/input-file.component';
import { AviaoComponent } from './components/aviao/aviao.component';
import { CarroComponent } from './components/carro/carro.component';
import { BarcoComponent } from './components/barco/barco.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { CategoriaComponent } from './components/categoria/categoria.component';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { DetalhaAviaoComponent } from './components/aviao/detalha-aviao/detalha-aviao.component';
import { DetalhaCarroComponent } from './components/carro/detalha-carro/detalha-carro.component';
import { DetalhaBarcoComponent } from './components/barco/detalha-barco/detalha-barco.component';

@NgModule({
  declarations: [
    JreaderComponent,
    InputFileComponent,
    AviaoComponent,
    CarroComponent,
    BarcoComponent,
    ConteudoDirective,
    TituloDirective,
    RodapeComponent,
    CategoriaComponent,
    DetalhaAviaoComponent,
    DetalhaCarroComponent,
    DetalhaBarcoComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule
  ],
  exports: [
    JreaderComponent,
    InputFileComponent,
    AviaoComponent,
    CarroComponent,
    BarcoComponent,
    ConteudoDirective,
    TituloDirective,
    RodapeComponent
  ]
})
export class JreaderModule { }
