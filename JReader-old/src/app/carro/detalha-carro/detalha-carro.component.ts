import { Component, Input, SimpleChanges } from '@angular/core';
import { Carro } from '../../model/Carro';

@Component({
  selector: 'app-detalha-carro',
  templateUrl: './detalha-carro.component.html',
  styleUrl: './detalha-carro.component.css'
})
export class DetalhaCarroComponent {

  @Input() carro: any;

  adicionar(carro: Carro) {
    console.log(carro);
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('[detalha.carro.component] Carro:', this.carro);
  // }

}
