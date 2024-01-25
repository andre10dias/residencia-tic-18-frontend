import { Component, Input, SimpleChanges } from '@angular/core';
import { Resultado } from './model/Resultado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'wikiApp';
  listaResultados: Resultado[] = [];

  receberResultado(results: any) {
    this.listaResultados = results;
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('[app.component]:', this.resultado);
  // }
}
