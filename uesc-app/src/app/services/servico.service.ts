import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Servico } from '../models/servico';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private URL_SERICOS: string = 'https://api.hgbrasil.com/weather';
  private KEY: string = 'live_B1QYG01HL57Lx8NXfFSXxCIouu94SBOYVoE6HhKmAhow3y3GeIskzb8zNQbi1cxU';

  constructor(private http: HttpClient) { }

  public getServicos(): Observable<Servico[]> {
    return this.http.get<Servico[]>(`${this.URL_SERICOS}?key=${this.KEY}&lat=-14.792&lon=-39.051&user_ip=remote`);
  }
}
