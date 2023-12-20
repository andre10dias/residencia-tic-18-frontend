import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  public montarTag(tag: string, classe: string, texto: string): HTMLElement {
    let tagx: HTMLElement = document.createElement(tag);

    if (classe != '') {
        tagx.classList.add(classe);
    }

    tagx.innerHTML = texto;
    return tagx;
  }

  public montarTagImg(classe: string, src: string): HTMLImageElement {
    let imagem: HTMLImageElement = this.montarTag('img', classe, '') as HTMLImageElement;
    imagem.src = src;

    return imagem;
  }
}
