import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {
  
  movie: Movie = new Movie();
  booking: Booking = new Booking();
  ticket1: Ticket = new Ticket();
  constructor(private movieService: MovieService, private bookingService: BookingService, private route:Router){}
  
  ngOnInit(): void {
   this.getMovieById();
  }

  getMovieById(){
    this.movieService.getMovieById().subscribe(data=>{
      this.movie= data;
    })
  }

  bookTicket(id?:number){
    this.ticket1.movieId=id;
    let book=[];
    book[0]=this.ticket1;
    this.booking.ticket=book;
    console.log(this.booking);
    this.bookingService.bookTicket(this.booking).subscribe();
    this.route.navigate(['ticket'])
  }

}
