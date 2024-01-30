import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NegritoPipe } from './pipe/negrito.pipe';

import { WikiComponent } from './wiki.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { BuscaComponent } from './components/busca/busca.component';
import { ResultadoBuscaComponent } from './components/resultado-busca/resultado-busca.component';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    WikiComponent,
    NegritoPipe,
    TituloComponent,
    BuscaComponent,
    ResultadoBuscaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  exports: [
    WikiComponent
  ]
})
export class WikiModule { }
