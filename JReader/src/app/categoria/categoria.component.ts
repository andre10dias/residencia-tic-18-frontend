import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {

  @Input() listaCategoria: any = [];
  @Output() categoriaSelecionada = new EventEmitter<String>();

  exibirCategoria: string = '';
  aviao: any;

  selecionaCategoria(categoria: string) {
    this.exibirCategoria = categoria;
    this.categoriaSelecionada.emit(categoria);
  }

}
