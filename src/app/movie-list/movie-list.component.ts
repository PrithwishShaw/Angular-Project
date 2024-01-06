import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  movie?: Movie[];

  constructor(private movieService: MovieService, 
    private rounter: Router){}

    bookMovieTicket(id?: number){
      this.rounter.navigate(['book-ticket']);
    }

}
