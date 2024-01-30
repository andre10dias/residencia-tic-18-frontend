import { Component, Input } from '@angular/core';
import { Aviao } from '../../../models/aviao';

@Component({
  selector: 'app-detalha-aviao',
  templateUrl: './detalha-aviao.component.html',
  styleUrl: './detalha-aviao.component.css'
})
export class DetalhaAviaoComponent {
  @Input() aviao: any;

  adicionar(aviao: Aviao) {
    console.log(aviao);
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('[detalha.aviao.component] Aviao:', this.aviao);
  // }
}
