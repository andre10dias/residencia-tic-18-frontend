import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Aviao } from '../../models/aviao';
import { Carro } from '../../models/carro';
import { Barco } from '../../models/barco';
import { JreaderService } from '../../services/jreader.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {

  // @Input() listaCategoria: any = [];
  // @Output() categoriaSelecionada = new EventEmitter<any>();
  // @Output() adicionarCategoria = new EventEmitter<boolean>();

  veiculoSelecionado: any = [];
  exibirCategoria: string = '';

  constructor(private service: JreaderService) {
    this.service.selecao$.subscribe((data) => {
      // console.log(data);
      this.veiculoSelecionado = data;
    })
  }

  selecionaCategoria(categoria: string) {
    //this.adicionarCategoria.emit(false);
    this.exibirCategoria = categoria;

    switch (categoria) {
      case 'AVIAO':
        this.service.sendAviao();
        break;

      case 'CARRO':
        this.service.sendCarro();
        break;

      case 'BARCO':
        this.service.sendBarco();
        break;
    }
  }

  // adicionar(event: boolean) {
  //   if (event) {
  //     switch (this.exibirCategoria) {
  //       case 'AVIAO':
  //         this.categoriaSelecionada.emit(this.getListaAvioes());
  //         break;
  
  //       case 'CARRO':
  //         this.categoriaSelecionada.emit(this.getListaCarros());
  //         break;
  
  //       case 'BARCO':
  //         this.categoriaSelecionada.emit(this.getListaBarcos());
  //         break;
  //     }

  //     this.adicionarCategoria.emit(event);
  //   }
  // }

}