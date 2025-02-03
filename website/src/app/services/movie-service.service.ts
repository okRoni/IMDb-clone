import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movie';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url = 'http://localhost:3000/movies';
  constructor(private httpClient: HttpClient) {
    
  }
  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.url).pipe(
      catchError(error => {
        console.error('Error fetching movies:', error);
        return throwError(() => new Error('Error fetching movies'));
      })
    );
  }
  getMovie(id: number) {
    return this.httpClient.get(`${this.url}/${id}`);
  }
  addMovie(movie: any) {
    return this.httpClient.post(this.url, movie);
  }
  updateMovie(movie: any) {
    return this.httpClient.put(`${this.url}/${movie.id}`, movie);
  }
  deleteMovie(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
  

}
