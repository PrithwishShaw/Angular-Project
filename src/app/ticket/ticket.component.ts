import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit{

  ticket!:Ticket;

  ngOnInit(): void {
  }

}
