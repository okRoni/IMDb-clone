import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoviesPageComponent } from './movies-page/movies-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MoviesPageComponent],
  template: `
    <h1>IMDb clone</h1>
    <section>
      <app-movies-page></app-movies-page>
    </section>
  `,
  styles: `
  h1 {
    color: #c6782e;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 250%;
  }
  `
})
export class AppComponent {
  title = 'website';
}
