import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-detalha-barco',
  templateUrl: './detalha-barco.component.html',
  styleUrl: './detalha-barco.component.css'
})
export class DetalhaBarcoComponent {

  @Input() barco: any;

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('[detalha.barco.component] Barco:', this.barco);
  // }

}
