import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  private URL_NOTICIAS: string = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=3';

  constructor(private http: HttpClient) { }

  public getNoticias(): Observable<any> {
    return this.http.get<any>(this.URL_NOTICIAS);
  }

}