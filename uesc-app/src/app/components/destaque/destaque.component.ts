import { Component } from '@angular/core';
import { Destaque } from '../../models/destaque';
import { UtilService } from '../../utils/util.service';
import { DestaqueService } from '../../services/destaque.service';

@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.component.html',
  styleUrl: './destaque.component.css'
})
export class DestaqueComponent {

  protected titulo: string = "Destaque";

  constructor(
    private destaqueService: DestaqueService,
    private utilService: UtilService
  ) { }

  public ngOnInit(): void {
    this.getDestaques();
  }

  getDestaques() {
    this.destaqueService.getDestaques().subscribe({
      next: (data) => {
        let count = 0;

        data.forEach((x: any, index: number) => {
          let destaque = new Destaque(x.id, x.url, x.height, x.width);

          if (count < 2) { //O parâmetro "limit" da API não funciona direito
              this.exibeDestaque(destaque, 'img'+(index+1));
          }

          count++;
        })
      },
      error: (error) => {
        console.error('Erro ao recuperar notícias:', error);
      }
    });
  }
  

  private exibeDestaque(destaque: Destaque, classe: string) {
    let div = document.querySelector('.imagens');
    let img = this.utilService.montarTagImg(classe, destaque.url);

    div?.appendChild(img);
  }

}
