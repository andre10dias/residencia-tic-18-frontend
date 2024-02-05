import { Component, Input, SimpleChanges } from '@angular/core';
import { JreaderService } from '../../../services/jreader.service';

@Component({
  selector: 'app-detalha-aviao',
  templateUrl: './detalha-aviao.component.html',
  styleUrl: './detalha-aviao.component.css'
})
export class DetalhaAviaoComponent {
  @Input() aviao: any;
  @Input() img: string = '';

  constructor(private service: JreaderService) {}

  adicionar() {
    this.service.sendAdd(true);
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('[detalha.aviao.component] Aviao:', this.aviao);
  // }
}