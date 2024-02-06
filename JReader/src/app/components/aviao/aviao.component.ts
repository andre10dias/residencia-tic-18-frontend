import { Component, Input } from '@angular/core';

import { Aviao } from '../../models/aviao';
import { CategoriaEnum } from '../../enums/categoria-enum';
import { JreaderService } from '../../services/jreader.service';

@Component({
  selector: 'app-aviao',
  templateUrl: './aviao.component.html',
  styleUrl: './aviao.component.css'
})
export class AviaoComponent {
  @Input() listaAviao: any;

  titulo: string = CategoriaEnum.Aviao;
  pathImg: string = '';
  aviao: any;

  constructor(private service: JreaderService) {}

  filtrarAviao(nome: string) {
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

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('[aviao.component] Lista de Aviões:', this.listaAviao);
  // }
}