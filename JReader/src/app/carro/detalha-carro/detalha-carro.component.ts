import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-detalha-carro',
  templateUrl: './detalha-carro.component.html',
  styleUrl: './detalha-carro.component.css'
})
export class DetalhaCarroComponent {

  @Input() carro: any;

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('[detalha.carro.component] Carro:', this.carro);
  // }

}
