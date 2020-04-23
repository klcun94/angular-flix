import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieAPIService {
  readonly MOVIE_URL = 'https://api.themoviedb.org/3/';
  readonly API_KEY = '';
  constructor(private httpClient: HttpClient) { }
  get(query: string) {
    return this.httpClient.get(${this.MOVIE_URL})/?api_key=${this.API_KEY}&query=${query}.toPromise();
  }
}
