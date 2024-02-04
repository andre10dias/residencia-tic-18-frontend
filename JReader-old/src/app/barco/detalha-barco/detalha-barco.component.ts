import { Component, Input, SimpleChanges } from '@angular/core';
import { Barco } from '../../model/Barco';

@Component({
  selector: 'app-detalha-barco',
  templateUrl: './detalha-barco.component.html',
  styleUrl: './detalha-barco.component.css'
})
export class DetalhaBarcoComponent {

  @Input() barco: any;

  adicionar(barco: Barco) {
    console.log(barco);
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('[detalha.barco.component] Barco:', this.barco);
  // }

}
