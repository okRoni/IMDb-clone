import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoviesPageComponent } from './movies/movies-page/movies-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MoviesPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'website';
}
