import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchResults = [];
  myMovieList =  [];
  title = 'Angular Flix';
  constructor(private movieService: MovieService){}
  ngOnInit() {
    this.searchResults = this.movieService.getSearchResults();
    this.myMovieList = 
  }
}
