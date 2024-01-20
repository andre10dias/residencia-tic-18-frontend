import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categoria } from '../enum/Categoria';

@Component({
  selector: 'app-barco',
  templateUrl: './barco.component.html',
  styleUrl: './barco.component.css'
})
export class BarcoComponent {

  @Input() listaBarco: any;
  @Output() barcoSelecionado = new EventEmitter<String>();

  titulo: string = Categoria.Barco;

}
