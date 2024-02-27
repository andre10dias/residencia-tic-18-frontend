import { Injectable } from '@angular/core';
import { AcoesValor } from '../model/acoes-valor';
import { AcoesStatus } from '../model/acoes-status';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  listaValor: AcoesValor[] = [];
  listaStatus: AcoesStatus[] = [];

  constructor() { }

  addValor(campo: string, valor: string) {
    let acao: AcoesValor = new AcoesValor(new Date(), campo, valor);
    this.listaValor.push(acao);
  }

  addStatus(campo: string, status: string) {
    let acao: AcoesStatus = new AcoesStatus(new Date(), campo, status);
    this.listaStatus.push(acao);
  }
}
