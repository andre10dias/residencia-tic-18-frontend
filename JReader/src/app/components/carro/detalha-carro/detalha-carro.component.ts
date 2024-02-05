import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Carro } from '../../../models/carro';
import { JreaderService } from '../../../services/jreader.service';

@Component({
  selector: 'app-detalha-carro',
  templateUrl: './detalha-carro.component.html',
  styleUrl: './detalha-carro.component.css'
})
export class DetalhaCarroComponent {

  @Input() carro: any;
  @Input() img: string = '';

  constructor(private service: JreaderService) {}

  adicionar() {
    this.service.sendAdd(true);
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('[detalha.aviao.component] Aviao:', this.aviao);
  // }

}