import { Component } from '@angular/core';

import { ServicoService } from '../../services/servico.service';
import { Servico } from '../../models/servico';
import { UtilService } from '../../utils/util.service';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrl: './servico.component.css'
})
export class ServicoComponent {

  protected titulo: string = "Serviços";

  constructor(
    private servicoService: ServicoService,
    private utilService: UtilService
  ) { }

  ngOnInit(): void {
    this.getNoticias();
  }

  getNoticias() {
    this.servicoService.getServicos().subscribe({
      next: (data) => {
        let titulo: string = "Previsão do tempo para a cidade de " 

        let servico: Servico = new Servico(
          titulo + data.results.city, 
          data.results.date + " " + data.results.time, 
          data.results.description, 
          data.results.temp, 
          data.results.humidity, 
          data.results.cloudiness, 
          data.results.rain, 
          data.results.wind_speedy
        );

        this.exibeServico(servico);
    },
      error: (error) => {
        console.error('Erro ao recuperar notícias:', error);
      }
    });
  }

  public exibeServico(servico: Servico) {
    let div = document.querySelector('#servicos');

    let h5 = this.utilService.montarTag('h5', '', servico.titulo);
    let ul = this.utilService.montarTag('ul', '', '');

    let lis = [];

    lis.push(this.utilService.montarTag('li', '', "Data/Hora: " + servico.dataHora));
    lis.push(this.utilService.montarTag('li', '', "Condição atual do tempo: " + servico.condicaoTempo));
    lis.push(this.utilService.montarTag('li', '', "Temperatura: " + servico.temperatura));
    lis.push(this.utilService.montarTag('li', '', "Humidade: " + servico.humidade));
    lis.push(this.utilService.montarTag('li', '', "Nebulosidade: " + servico.nebulosidade));
    lis.push(this.utilService.montarTag('li', '', "Volume de chuva: " + servico.volumeChuva));
    lis.push(this.utilService.montarTag('li', '', "Velocidade do vento: " + servico.velocidadeVento));

    lis.forEach(li => {
        ul.appendChild(li);
    });

    div?.appendChild(h5);
    div?.appendChild(ul);
}

}
