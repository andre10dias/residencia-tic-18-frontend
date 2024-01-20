import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categoria } from '../enum/Categoria';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrl: './carro.component.css'
})
export class CarroComponent {

  @Input() listaCarro: any;
  @Output() carroSelecionado = new EventEmitter<String>();

  titulo: string = Categoria.Carro;

}
