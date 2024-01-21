import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Categoria } from '../enum/Categoria';
import { Aviao } from '../model/Aviao';

@Component({
  selector: 'app-aviao',
  templateUrl: './aviao.component.html',
  styleUrl: './aviao.component.css'
})
export class AviaoComponent {
  
  @Input() listaAviao: any;
  @Output() aviaoSelecionado = new EventEmitter<Aviao>();

  titulo: string = Categoria.Aviao;
  aviao: any;

  filtrarAviao(nome: string) {
    const aviaoSelecionado = this.listaAviao.find((aviao: Aviao) => aviao.nome === nome);
    if (aviaoSelecionado) {
      this.aviaoSelecionado.emit(aviaoSelecionado);
      this.aviao = aviaoSelecionado;
    }
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('[aviao.component] Lista de Aviões:', this.listaAviao);
  // }
  

}
