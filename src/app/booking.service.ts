import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './booking';

const REGISTER = 'http://localhost:2305/api';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient: HttpClient) { }

  bookTicket(booking?:Booking):Observable<Object>{
    return this.httpClient.post<Object>(REGISTER+ '/bookTicket',booking);
  }
}
