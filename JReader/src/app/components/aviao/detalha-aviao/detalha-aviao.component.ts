import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-detalha-aviao',
  templateUrl: './detalha-aviao.component.html',
  styleUrl: './detalha-aviao.component.css'
})
export class DetalhaAviaoComponent {
  @Input() aviao: any;
  @Input() listaAviao: any;
  @Input() img: string = '';
  @Output() adicionarCategoria = new EventEmitter<boolean>();

  adicionar() {
    this.adicionarCategoria.emit(true);
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('[detalha.aviao.component] Aviao:', this.aviao);
  // }
}