import { Component } from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {ThemePalette} from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portifolioApp';

  links = ['UESC-APP', 'JReader', 'Wiki-APP'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  constructor(private route: Router) { }

  getRota(link: string) {
    this.activeLink = link;

    switch (link) {
      case "UESC-APP":
        this.route.navigate(['/uesc-app']);
        break;
    
      case "JReader":
        this.route.navigate(['/jreader']);
        break;

      case "Wiki-APP":
        this.route.navigate(['/wiki-app']);
        break;
    }
  }
  
}
