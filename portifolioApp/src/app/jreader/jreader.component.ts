import { Component } from '@angular/core';

@Component({
  selector: 'app-jreader',
  templateUrl: './jreader.component.html',
  styleUrl: './jreader.component.css'
})
export class JreaderComponent {
  title = 'JReader';
  listaCategoria: any = [];
  
  onJsonObject(event: any) {
    this.listaCategoria = event;
  }
}
