import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-card',
  imports: [],
  template: `
    <section>
      <h3>{{ movie.title }}</h3>
      <p>{{ movie.description }}</p>
      <p>Genre: {{ movie.genre }}</p>
      <p>Year: {{ movie.year }}</p>
      <p>Director: {{ movie.director }}</p>
      <p>Rating: {{ movie.rating }}</p>
    </section>
  `,
  styles: `
    section {
      border: 1px solid #ccc;
      border-radius: 5px;
      margin: 10px 0;
      padding: 10px;
    }
    h3 {
      color: #c6782e;
      font-size: 150%;
    }
    p {
      font-size: 120%;
    }
  `
})
export class MovieCardComponent {
  @Input() movie!: Movie;
}
