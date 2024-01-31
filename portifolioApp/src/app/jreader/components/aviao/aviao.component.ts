import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Aviao } from '../../models/aviao';
import { CategoriaEnum } from '../../enums/categoriaEnum';

@Component({
  selector: 'app-aviao',
  templateUrl: './aviao.component.html',
  styleUrl: './aviao.component.css'
})
export class AviaoComponent {
  @Input() listaAviao: any;
  @Output() adicionarCategoria = new EventEmitter<boolean>();

  titulo: string = CategoriaEnum.Aviao;
  pathImg: string = '';
  aviao: any;

  filtrarAviao(nome: string) {
    this.adicionarCategoria.emit(false);
    const aviaoSelecionado = this.listaAviao.find((aviao: Aviao) => aviao.nome === nome);
    if (aviaoSelecionado) {
      this.aviao = aviaoSelecionado;

      this.pathImg = '../../assets/img/';
      let str = aviaoSelecionado.nome.toLowerCase().split(' ');
      switch (str[0]) {
        case 'supermarine':
          this.pathImg += 'supermarine.jpg';
          break;
      
        case 'p-51':
          this.pathImg += 'p-51.jpg';
          break;

        case 'b-17':
          this.pathImg += 'b-17.jpg';
          break;
      }
    }
  }

  adicionar(event: boolean) {
    this.adicionarCategoria.emit(event);
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('[aviao.component] Lista de Aviões:', this.listaAviao);
  // }
}
