import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Barco } from '../../../models/barco';

@Component({
  selector: 'app-detalha-barco',
  templateUrl: './detalha-barco.component.html',
  styleUrl: './detalha-barco.component.css'
})
export class DetalhaBarcoComponent {

  @Input() barco: any;
  @Input() listaBarco: any;
  @Input() img: string = '';
  @Output() adicionarCategoria = new EventEmitter<boolean>();

  adicionar() {
    this.adicionarCategoria.emit(true);
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('[detalha.barco.component] Barco:', this.barco);
  // }

}