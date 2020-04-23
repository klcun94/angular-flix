import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { MovieAPIService } from './movie-api.service';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  searchResults: any[] = [];
  myMovieList: any[] = [];
  constructor(private apiService: ApiService,
              private movieApiService: MovieAPIService) { }
}
getSearchResults(): any[] {
  return this.searchResults;
}
getMyMovieList(): any[] {
  return this.myMovieList;
}
async searchForMovies(searchTerm: string) {

}
async loadMovieList() {
  const result = await this.apiServie.get();
  this.myMovieList.length = 0;
  this.myMovieList.push(...results);
}
async saveToList(movie: any) {
  this.apiService.post(movies);
}
