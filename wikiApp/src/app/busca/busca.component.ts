import { Component } from '@angular/core';
import { WikiService } from '../service/wiki.service';

import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.css'
})
export class BuscaComponent {

  buscar: string = '';
  resultado: any = [];

  constructor(private service: WikiService) { }

  public pesquisar() {
    this.service.search(this.buscar).pipe(
      tap((res: any) => {
        this.resultado = res.query.search;
        console.log(this.buscar);
        console.log(this.resultado);
      }),
      catchError((error) => {
        console.error('Erro ao buscar:', error);
        return of(null);
      })
    ).subscribe();
  }

}
