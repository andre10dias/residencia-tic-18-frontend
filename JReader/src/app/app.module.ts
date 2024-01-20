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

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CategoriaComponent } from './categoria/categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    AviaoComponent,
    CarroComponent,
    BarcoComponent,
    InputFileComponent,
    RodapeComponent,
    CategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
