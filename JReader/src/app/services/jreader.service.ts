import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
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
  
  selectedFile: any;

  sendFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
  
    if (this.selectedFile) {
      const fr = new FileReader();
  
      fr.onload = () => {
        const content = fr.result as string;
  
        try {
          const jObject = JSON.parse(content);
  
          // Criar um objeto para armazenar informações adicionais
          const fileInfo = {
            name: this.selectedFile.name,
            content: content
          };
  
          this._jsonObjectSubject.next(jObject);
          this.selectedFile = fileInfo;
          this._listaVeiculos = jObject;
        } catch (error) {
          console.error("Falha ao carregar arquivo: " + error);
        }
      };
  
      fr.readAsText(this.selectedFile);
    }
  }

  sendAviao() {
    this._listaCategoriaSelecionada = this.getListaAvioes();
    this._selecaoSubject.next(this._listaCategoriaSelecionada);
  }

  sendBarco() {
    this._listaCategoriaSelecionada = this.getListaBarcos();
    this._selecaoSubject.next(this._listaCategoriaSelecionada);
  }

  sendCarro() {
    this._listaCategoriaSelecionada = this.getListaCarros();
    this._selecaoSubject.next(this._listaCategoriaSelecionada);
  }

  sendAdd(isAdd: boolean) {
    let listaNomes: string[] = [];
    this._listaCategoriaSelecionada.forEach((element: any) => {
      listaNomes.push(element.nome);
    })
    
    this._addSubject.next({listaNomes, isAdd});
  }

  private getListaAvioes() {
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

    return listaAvioes;
  }

  private getListaBarcos() {
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

    return listaBarcos;
  }

  private getListaCarros() {
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

    return listaCarros;
  }

}
