import { Component, EventEmitter, Output } from '@angular/core';
import { WikiService } from '../service/wiki.service';

import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Resultado } from '../model/Resultado';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.css'
})
export class BuscaComponent {

  @Output() dadosBusca = new EventEmitter<any>();

  buscar: string = '';
  listaResultados: Resultado[] = [];

  constructor(private service: WikiService) { }

  public pesquisar() {
    if (this.buscar === '') {
      return;
    }
    
    this.service.search(this.buscar).pipe(
      tap((res: any) => {
        this.emitirResultado(res.query.search);
      }),
      catchError((error) => {
        console.error('Erro ao buscar:', error);
        return of(null);
      })
    ).subscribe();
  }

  public emitirResultado(result: any) {
    result.forEach((element: any) => {
      let snippet = this.stripHtmlTags(element.snippet);
      let resultado = new Resultado(element.title, snippet, new Date(element.timestamp), element.pageid);
      this.listaResultados.push(resultado);
    });
    
    this.dadosBusca.emit(this.listaResultados);
  }

  // Remove tags HTML da string
  private stripHtmlTags(html: string): string {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  }

}
