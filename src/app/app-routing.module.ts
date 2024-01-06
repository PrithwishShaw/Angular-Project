import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviesComponent } from './movies/movies.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  {path:"bookyourshow", component: HomeComponent},
  {path:"movie-list", component: MovieListComponent},
  {path:"movies", component: MoviesComponent},
  {path:"bookyourshow/movies", component: MoviesComponent},
  {path:"book-ticket", component: BookTicketComponent},
  {path:"ticket", component: TicketComponent},
  {path:"", redirectTo:"bookyourshow", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
