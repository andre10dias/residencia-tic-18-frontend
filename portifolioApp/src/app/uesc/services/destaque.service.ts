import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestaqueService {

  private KEY: string = 'live_B1QYG01HL57Lx8NXfFSXxCIouu94SBOYVoE6HhKmAhow3y3GeIskzb8zNQbi1cxU';
  private URL_DESTAQUES: string = 'https://api.thecatapi.com/v1/images/search';
  private LIMITE: number = 2;

  constructor(private http: HttpClient) { }

  public getDestaques(): Observable<any> {
    return this.http.get<any>(`${this.URL_DESTAQUES}?limit=${this.LIMITE}&api_key=${this.KEY}`);
  }

}
