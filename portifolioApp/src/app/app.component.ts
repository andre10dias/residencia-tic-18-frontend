import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'portifolioApp';

  links = ['UESC-APP', 'JReader', 'Wiki-APP'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      take(1) // Execute apenas uma vez após a inicialização
    ).subscribe(() => {
      // Navegue diretamente para a rota 'uesc-app' ao iniciar
      this.router.navigate(['/uesc-app']);
    });
  }

  getRota(link: string) {
    this.activeLink = link;

    switch (link) {
      case "UESC-APP":
        this.router.navigate(['/uesc-app']);
        break;
    
      case "JReader":
        this.router.navigate(['/jreader']);
        break;

      case "Wiki-APP":
        this.router.navigate(['/wiki-app']);
        break;
    }
  }
  
}
