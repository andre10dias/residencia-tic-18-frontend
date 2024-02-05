import { Component, Input, SimpleChanges } from '@angular/core';
import { JreaderService } from '../../services/jreader.service';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrl: './rodape.component.css'
})
export class RodapeComponent {
  listaNomesCategorias: string[] = [];
  isAddNomeCategoria: boolean = false;

  constructor(private service: JreaderService) {
    this.service.addCategoria$.subscribe((data) => {
      this.listaNomesCategorias = data.listaNomes;
      this.isAddNomeCategoria = data.isAdd;
    })
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('[rodape.component] listaCategoria:', this.listaCategoria);
  //   console.log('[rodape.component] isAddCategoria:', this.isAddCategoria);
  // }
  
}
