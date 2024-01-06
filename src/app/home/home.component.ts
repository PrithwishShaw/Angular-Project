import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  movie?: Movie[];

  constructor(private movieService: MovieService, 
    private rounter: Router){}

  ngOnInit(): void {
   
  }  
  
  
  
  bookMovieTicket(id?: number){
    // this.movieService.getId(id);
    this.rounter.navigate(['book-ticket']);
  }
}
