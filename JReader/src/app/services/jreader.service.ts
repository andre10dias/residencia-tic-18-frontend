import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Categoria } from '../models/categoria';
import { Aviao } from '../models/aviao';
import { Barco } from '../models/barco';
import { Carro } from '../models/carro';

@Injectable({
  providedIn: 'root'
})
export class JreaderService {

  private _jsonObjectSubject = new Subject<any>();
  private _selecaoSubject = new Subject<any>();
  private _addSubject = new Subject<any>();

  private _listaVeiculos: any;
  private _listaCategoriaSelecionada: any;

  listaCategoria$ = this._jsonObjectSubject.asObservable();
  selecao$ = this._selecaoSubject.asObservable();
  addCategoria$ = this._addSubject.asObservable();

  // aviao$ = this._selecaoSubject.asObservable();
  // carro$ = this._selecaoSubject.asObservable();
  // barco$ = this._selecaoSubject.asObservable();

  sendJsonObject(jsonObject: any) {
    this._listaVeiculos = jsonObject;
    this._jsonObjectSubject.next(jsonObject);
  }

  sendAviao() {
    let aviao: Aviao;
    let listaAvioes: Aviao[] = [];

    this._listaVeiculos.Avioes.forEach((element: any) => {
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
    })

    this._listaCategoriaSelecionada = listaAvioes;
    this._selecaoSubject.next(listaAvioes);
  }

  sendBarco() {
    let barco: Barco;
    let listaBarcos: Barco[] = [];

    this._listaVeiculos.Barcos.forEach((element: any) => {
      barco = new Barco(
        element.Name, 
        element.Model, 
        element.Engine, 
        element.NumberOfPassengers, 
        element.Autonomia, 
        element.Alcance
      );

      listaBarcos.push(barco);
    })

    this._listaCategoriaSelecionada = listaBarcos;
    this._selecaoSubject.next(listaBarcos);
  }

  sendCarro() {
    let carro: Carro;
    let listaCarros: Carro[] = [];

    this._listaVeiculos.Carros.forEach((element: any) => {
      carro = new Carro(
        element.Name, 
        element.Model, 
        element.Engine, 
        element.NumberOfPassengers, 
        element.Autonomia, 
        element.Alcance
      );

      listaCarros.push(carro);
    })

    this._listaCategoriaSelecionada = listaCarros;
    this._selecaoSubject.next(listaCarros);
  }

  sendAdd(isAdd: boolean) {
    let listaNomes: string[] = [];
    if (isAdd) {
      this._listaCategoriaSelecionada.forEach((element: any) => {
        listaNomes.push(element.nome);
      })
      
      this._addSubject.next({listaNomes, isAdd});
    }
  }

}
