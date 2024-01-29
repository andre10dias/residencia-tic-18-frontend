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

  public montarTagImg(classe: string, src: string, height?: number, width?: number): HTMLImageElement {
    let imagem: HTMLImageElement = this.montarTag('img', classe, '') as HTMLImageElement;
    imagem.src = src;

    if (width) {
      imagem.width = width;
    }

    if (height) {
      imagem.height = height;
    }

    return imagem;
  }

  public montarTagUlComLi(classe: string, qtdeLi: number, styles: Record<string, string> = {}): HTMLElement {
    let ul: HTMLElement = this.montarTag('ul', classe, '') as HTMLElement;
  
    for (let i = 0; i < qtdeLi; i++) {
      let li: HTMLElement = this.montarTag('li', '', '') as HTMLElement;
      ul.appendChild(li);
    }
  
    return ul;
  }

}
