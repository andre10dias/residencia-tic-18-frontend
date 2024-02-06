import { Component } from '@angular/core';
import { JreaderService } from './services/jreader.service';

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

  constructor(private service: JreaderService) { 
    this.service.listaCategoria$.subscribe((data) => {
      this.listaCategoria = data;
    })
  }
  
}
