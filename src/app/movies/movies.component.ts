import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{
  
  movie?: Movie[];

  constructor(private movieService: MovieService, 
    private rounter: Router){}
  
  ngOnInit(): void {
   this.getAllMovies();
  }

  getAllMovies(){
    this.movieService.getAllMovie().subscribe(data=>{
      this.movie=data;  
    });
  }

  bookMovieTicket(id?: number){
    this.movieService.getId(id);
    this.rounter.navigate(['book-ticket']);
  }

}



