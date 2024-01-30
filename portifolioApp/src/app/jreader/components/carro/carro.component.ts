import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categoria } from '../../enums/categoria';
import { Carro } from '../../models/carro';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrl: './carro.component.css'
})
export class CarroComponent {
  @Input() listaCarro: any;
  @Output() carroSelecionado = new EventEmitter<Carro>();

  titulo: string = Categoria.Carro;
  carro: any;

  filtrarCarro(nome: string) {
    const carroSelecionado = this.listaCarro.find((carro: Carro) => carro.nome === nome);
    if (carroSelecionado) {
      this.carroSelecionado.emit(carroSelecionado);
      this.carro = carroSelecionado;
    }
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('[carro.component] Lista de Carros:', this.listaCarro);
  // }
}
