import { Component } from '@angular/core';
import { Resultado } from './models/resultado';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrl: './wiki.component.css'
})
export class WikiComponent {
  title = 'wikiApp';
  listaResultados: Resultado[] = [];

  receberResultado(results: any) {
    this.listaResultados = [];
    this.listaResultados = results;
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('[app.component]:', this.resultado);
  // }
}
