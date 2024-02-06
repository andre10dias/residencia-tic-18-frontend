import { Component, Input } from '@angular/core';
import { Barco } from '../../models/barco';
import { CategoriaEnum } from '../../enums/categoria-enum';
import { JreaderService } from '../../services/jreader.service';

@Component({
  selector: 'app-barco',
  templateUrl: './barco.component.html',
  styleUrl: './barco.component.css'
})
export class BarcoComponent {
  @Input() listaBarco: any;

  titulo: string = CategoriaEnum.Barco;
  pathImg: string = '';
  barco: any;

  constructor(private service: JreaderService) {}

  filtrarBarco(nome: string) {
    const barcoSelecionado = this.listaBarco.find((barco: Barco) => barco.nome === nome);
    if (barcoSelecionado) {
      this.barco = barcoSelecionado;

      this.pathImg = '../../assets/img/';
      let str = barcoSelecionado.nome.toLowerCase().split(' ');
      switch (str[0]) {
        case 'ferretti':
          this.pathImg += 'ferretti.jpg';
          break;
      
        case 'azimut':
          this.pathImg += 'azimut.jpg';
          break;

        case 'sunseeker':
          this.pathImg += 'sunseeker.jpg';
          break;
      }
    }
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('[barco.component] Lista de Barcos:', this.listaBarco);
  // }
}
