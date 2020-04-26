import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieAPIService {
  readonly MOVIE_URL = 'https://api.themoviedb.org/3/search/movie';
  readonly API_KEY = '8352008bb8500ef63207ee4999cd37a2';
  constructor(private httpClient: HttpClient) { }
  get(query: string): any {
    return this.httpClient.get<any>('${this.MOVIE_URL}/?api_key=${this.API_KEY}&query=${query}').toPromise();
  }
}
