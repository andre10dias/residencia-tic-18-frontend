import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'JReader';
  listaCategoria: any = [];
  
  onJsonObject(event: any) {
    this.listaCategoria = event;
  }
  
}
