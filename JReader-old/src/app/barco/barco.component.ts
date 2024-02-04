import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Categoria } from '../enum/Categoria';
import { Barco } from '../model/Barco';

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
