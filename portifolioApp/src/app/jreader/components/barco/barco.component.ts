import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Barco } from '../../models/barco';
import { Categoria } from '../../enums/categoria';

@Component({
  selector: 'app-barco',
  templateUrl: './barco.component.html',
  styleUrl: './barco.component.css'
})
export class BarcoComponent {
  @Input() listaBarco: any;
  @Output() barcoSelecionado = new EventEmitter<Barco>();

  titulo: string = Categoria.Barco;
  barco: any;

  filtrarBarco(nome: string) {
    const barcoSelecionado = this.listaBarco.find((barco: Barco) => barco.nome === nome);
    if (barcoSelecionado) {
      this.barcoSelecionado.emit(barcoSelecionado);
      this.barco = barcoSelecionado;
    }
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('[barco.component] Lista de Barcos:', this.listaBarco);
  // }
}
