import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { NoticiaService } from '../../services/noticia.service';
import { Noticia } from '../../models/noticia';
import { UtilService } from '../../utils/util.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css'
})
export class NoticiaComponent {

  protected titulo: string = "Notícias";

  constructor(
    private noticiaService: NoticiaService, 
    private utilService: UtilService
  ) { }

  public ngOnInit(): void {
    this.getNoticias();
  }

  getNoticias() {
    this.noticiaService.getNoticias().subscribe({
      next: (data) => {
        data.items.forEach((x: any) => {
          let noticia = new Noticia(x.id, x.titulo, x.introducao);
          this.exibeNoticia(noticia);
        }
      )},
      error: (error) => {
        console.error('Erro ao recuperar notícias:', error);
      }
    });
  }

  private exibeNoticia(noticia: Noticia) {
    let div = document.querySelector('#noticias');

    let h5 = this.utilService.montarTag('h5', '', noticia.titulo);
    let p = this.utilService.montarTag('p', '', noticia.introducao);

    div?.appendChild(h5);
    div?.appendChild(p);
  }

}