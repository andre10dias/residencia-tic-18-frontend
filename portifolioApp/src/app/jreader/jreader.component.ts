import { Component } from '@angular/core';

@Component({
  selector: 'app-jreader',
  templateUrl: './jreader.component.html',
  styleUrl: './jreader.component.css'
})
export class JreaderComponent {
  title = 'JReader';
  listaCategoria: any = [];
  categoriaSelecionada: any = [];
  adicionarCategoria: boolean = false;
  
  onJsonObject(event: any) {
    this.listaCategoria = event;
  }

  onCategoriaSelecionada(categoria: any) {
    this.categoriaSelecionada = categoria;
  }

  onAdicionarCategoria(event: boolean) {
    this.adicionarCategoria = event;
  }

}
