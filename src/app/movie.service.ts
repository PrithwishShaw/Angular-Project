import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';

const REGISTER = 'http://localhost:2305/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  id?:number;
  constructor(private httpClient: HttpClient) { }

  getAllMovie():Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(REGISTER+ 'getAllMovies', httpOptions);
  }

  getId(getId?:number){
    this.id= getId;
  }

  getMovieById():Observable<Object>{
    return this.httpClient.get<Object>(`${REGISTER+ 'getMovieById'}/${this.id}`, httpOptions)
  }
}
