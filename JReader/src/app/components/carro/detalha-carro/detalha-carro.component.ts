import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Carro } from '../../../models/carro';

@Component({
  selector: 'app-detalha-carro',
  templateUrl: './detalha-carro.component.html',
  styleUrl: './detalha-carro.component.css'
})
export class DetalhaCarroComponent {

  @Input() carro: any;
  @Input() listaCarro: any;
  @Input() img: string = '';
  @Output() adicionarCategoria = new EventEmitter<boolean>();

  adicionar() {
    this.adicionarCategoria.emit(true);
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('[detalha.carro.component] Carro:', this.carro);
  // }

}