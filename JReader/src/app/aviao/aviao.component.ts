import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categoria } from '../enum/Categoria';

@Component({
  selector: 'app-aviao',
  templateUrl: './aviao.component.html',
  styleUrl: './aviao.component.css'
})
export class AviaoComponent {
  
  @Input() listaAviao: any;
  @Output() aviaoSelecionado = new EventEmitter<String>();

  titulo: string = Categoria.Aviao;

}
