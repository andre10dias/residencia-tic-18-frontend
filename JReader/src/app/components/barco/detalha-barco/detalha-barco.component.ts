import { Component, Input, SimpleChanges } from '@angular/core';
import { JreaderService } from '../../../services/jreader.service';

@Component({
  selector: 'app-detalha-barco',
  templateUrl: './detalha-barco.component.html',
  styleUrl: './detalha-barco.component.css'
})
export class DetalhaBarcoComponent {

  @Input() barco: any;
  @Input() img: string = '';

  constructor(private service: JreaderService) {}

  adicionar() {
    this.service.sendAdd(true);
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('[detalha.aviao.component] Aviao:', this.aviao);
  // }

}