import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrl: './rodape.component.css'
})
export class RodapeComponent {
  @Input() listaCategoria: any = [];
  @Input() isAddCategoria: boolean = false;

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('[rodape.component] listaCategoria:', this.listaCategoria);
  //   console.log('[rodape.component] isAddCategoria:', this.isAddCategoria);
  // }
  
}
