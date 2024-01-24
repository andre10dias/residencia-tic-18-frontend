import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  private url: string = 'https://en.wikipedia.org/w/api.php';

  constructor(private http: HttpClient) { }

  public search(term: string) {
    return this.http.get(this.url, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        srsearch: term,
        utf8: '1',
        origin: '*',
      }
    });
  }
}
