import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  movies:any[]=[];
  
  constructor(private ms: ApiService) {}

  ngOnInit(): void {
    this.ms.MovieList().subscribe(
      (data)=>{
        this.movies = data.Search;
      }
    );
  }

}
