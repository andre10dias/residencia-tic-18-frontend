import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoriaEnum } from '../../enums/categoriaEnum';
import { Carro } from '../../models/carro';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrl: './carro.component.css'
})
export class CarroComponent {
  @Input() listaCarro: any;
  @Output() adicionarCategoria = new EventEmitter<boolean>();

  titulo: string = CategoriaEnum.Carro;
  pathImg: string = '';
  carro: any;

  filtrarCarro(nome: string) {
    const carroSelecionado = this.listaCarro.find((carro: Carro) => carro.nome === nome);
    if (carroSelecionado) {
      this.carro = carroSelecionado;

      this.pathImg = '../../assets/img/';
      let str = carroSelecionado.nome.toLowerCase().split(' ');
      switch (str[0]) {
        case 'tesla':
          this.pathImg += 'tesla.jpg';
          break;
      
        case 'ford':
          this.pathImg += 'mustang.jpg';
          break;

        case 'chevrolet':
          this.pathImg += 'camaro.jpg';
          break;
      }
    }
  }

  adicionar(event: boolean) {
    this.adicionarCategoria.emit(event);
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('[carro.component] Lista de Carros:', this.listaCarro);
  // }
}
