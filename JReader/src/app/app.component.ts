import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
