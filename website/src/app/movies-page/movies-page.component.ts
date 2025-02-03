import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies-page',
  imports: [MovieCardComponent],
  template: `
    <h2>Peliculas</h2>
    <section>
      <form>
        <input type="text" placeholder="Search for a movie">
        <button>Search</button>
      </form>
    </section>
    <section class="results">
      <app-movie-card *ngFor="let movie of moviesList" [movie]="movie"></app-movie-card>
    </section>
  `,
  styles: ``
})
export class MoviesPageComponent {
  moviesList: Movie[] = [
    {
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned',
      genre: 'Drama',
      year: 1994,
      director: 'Frank Darabont',
      rating: 9.3,
      cast: [],
    },
    {
      title: 'The Godfather',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      genre: 'Crime',
      year: 1972,
      director: 'Francis Ford Coppola',
      rating: 9.2,
      cast: [],
    },
    {
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      genre: 'Action',
      year: 2008,
      director: 'Christopher Nolan',
      rating: 9.0,
      cast: [],
    }
  ];
}
