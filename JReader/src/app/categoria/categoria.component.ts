import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Aviao } from '../model/Aviao';
import { Carro } from '../model/Carro';
import { Barco } from '../model/Barco';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {

  @Input() listaCategoria: any = [];
  @Output() categoriaSelecionada = new EventEmitter<String>();

  exibirCategoria: string = '';

  selecionaCategoria(categoria: string) {
    this.exibirCategoria = categoria;
    this.categoriaSelecionada.emit(categoria);
  }

  getListaAvioes() {
    let aviao: Aviao;
    let listaAvioes: any = [];

    if (this.listaCategoria.length !== 0) {
      this.listaCategoria.Avioes.forEach((element: any) => {
        aviao = new Aviao(
          element.Name, 
          element.Model, 
          element.Engine, 
          element.NumberOfPassengers, 
          element.Autonomia, 
          element.Alcance, 
          element.Teto
        );

        listaAvioes.push(aviao);
      });
    }

    return listaAvioes;
  }

  getListaCarros() {
    let carro: Carro;
    let listaCarros: any = [];

    if (this.listaCategoria.length !== 0) {
      this.listaCategoria.Carros.forEach((element: any) => {
        carro = new Carro(
          element.Name, 
          element.Model, 
          element.Engine, 
          element.NumberOfPassengers,  
          element.Autonomia, 
          element.Alcance
        );

        listaCarros.push(carro);
      });
    }

    return listaCarros;
  }

  getListaBarcos() {
    let barco: Barco;
    let listaBarcos: any = [];

    if (this.listaCategoria.length !== 0) {
      this.listaCategoria.Barcos.forEach((element: any) => {
        barco = new Barco(
          element.Name, 
          element.Model, 
          element.Engine, 
          element.NumberOfPassengers,  
          element.Autonomia, 
          element.Alcance
        );
  
        listaBarcos.push(barco);
      });
    }

    return listaBarcos;
  }

}
