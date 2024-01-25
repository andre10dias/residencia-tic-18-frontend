import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-resultado-busca',
  templateUrl: './resultado-busca.component.html',
  styleUrl: './resultado-busca.component.css'
})
export class ResultadoBuscaComponent {

  @Input() resultadoBusca: any;

  baseUrl: string = 'https://en.wikipedia.org/wiki?curid=';

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('[resultado-busca.component]: ', this.resultadoBusca);
  // }

}
