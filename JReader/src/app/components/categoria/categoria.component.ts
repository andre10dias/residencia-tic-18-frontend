import { Component } from '@angular/core';
import { JreaderService } from '../../services/jreader.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {

  veiculoSelecionado: any = [];
  exibirCategoria: string = '';

  constructor(private service: JreaderService) {
    this.service.selecao$.subscribe((data) => {
      this.veiculoSelecionado = data;
    })
  }

  selecionaCategoria(categoria: string) {
    this.exibirCategoria = categoria;

    switch (categoria) {
      case 'AVIAO':
        this.service.sendAviao();
        this.service.sendAdd(false);
        break;

      case 'CARRO':
        this.service.sendCarro();
        this.service.sendAdd(false);
        break;

      case 'BARCO':
        this.service.sendBarco();
        this.service.sendAdd(false);
        break;
    }
  }

}