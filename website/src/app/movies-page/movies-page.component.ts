import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Movie } from '../movie';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import {MovieService} from '../services/movie-service.service';
// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies-page',
  imports: [
    CommonModule, MovieCardComponent, MatFormFieldModule, MatInputModule, MatAutocompleteModule, 
    MatSelectModule, MatSliderModule, ReactiveFormsModule, FormsModule
  ],
  template: `
    <!-- Búsqueda por título -->
    <mat-form-field style="width: 250px;">
      <mat-label>Buscar película</mat-label>
      <input type="text" matInput [formControl]="busquedaControl">
    </mat-form-field>

    <!-- Filtrar por género -->
    <mat-form-field style="width: 180px; margin-left: 10px;">
      <mat-label>Género</mat-label>
      <mat-select [formControl]="generoControl">
        <mat-option value="">Todos</mat-option>
        <mat-option *ngFor="let genero of generos" [value]="genero">
          {{ genero }}
        </mat-option>
      </mat-select>
    </mat-form-field>

    <!-- Filtrar por año (rango) -->
    <mat-form-field style="width: 130px; margin-left: 10px;">
      <mat-label>Año desde</mat-label>
      <mat-select [formControl]="yearMinControl">
        <mat-option value="">Todos</mat-option>
        <mat-option *ngFor="let year of anios" [value]="year">{{ year }}</mat-option>
      </mat-select>
    </mat-form-field>

    <mat-form-field style="width: 130px; margin-left: 10px;">
      <mat-label>Año hasta</mat-label>
      <mat-select [formControl]="yearMaxControl">
        <mat-option value="">Todos</mat-option>
        <mat-option *ngFor="let year of anios" [value]="year">{{ year }}</mat-option>
      </mat-select>
    </mat-form-field>
    

    <h2>Películas</h2>
    <section class="results">
      <app-movie-card *ngFor="let movie of filteredMovies" [movie]="movie"></app-movie-card>
    </section>
  `,
  styles: ``
})
export class MoviesPageComponent {
  // moviesList: Movie[] = [
  //   { title: 'The Shawshank Redemption', description: 'Two imprisoned', genre: 'Drama', year: 1994, director: 'Frank Darabont', rating: 9.3, cast: [] },
  //   { title: 'The Godfather', description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', genre: 'Crime', year: 1972, director: 'Francis Ford Coppola', rating: 9.2, cast: [] },
  //   { title: 'The Dark Knight', description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.', genre: 'Action', year: 2008, director: 'Christopher Nolan', rating: 9.0, cast: [] }
  // ];
  public moviesList: Movie[] = [];

  filteredMovies: Movie[] = this.moviesList;
  busquedaControl = new FormControl('');
  generoControl = new FormControl('');
  yearMinControl = new FormControl('');
  yearMaxControl = new FormControl('');

  ratingMin = 0;
  ratingMax: number = 10;

  generos: string[] = [...new Set(this.moviesList.map(movie => movie.genre))];
  anios: number[] = [...new Set(this.moviesList.map(movie => movie.year))].sort((a, b) => a - b);

  constructor(private movieService: MovieService) {
    this.busquedaControl.valueChanges.pipe(startWith('')).subscribe(() => this.actualizarFiltro());
    this.generoControl.valueChanges.pipe(startWith('')).subscribe(() => this.actualizarFiltro());
    this.yearMinControl.valueChanges.pipe(startWith('')).subscribe(() => this.actualizarFiltro());
    this.yearMaxControl.valueChanges.pipe(startWith('')).subscribe(() => this.actualizarFiltro());
  }

  ngOnInit(): void{
    this.movieService.getMovies().subscribe(movies => this.moviesList = movies);
  }

  public actualizarFiltro() {
    const filtroTitulo = (this.busquedaControl.value || '').toLowerCase();
    const filtroGenero = this.generoControl.value;
    const filtroYearMin = this.yearMinControl.value ? Number(this.yearMinControl.value) : null;
    const filtroYearMax = this.yearMaxControl.value ? Number(this.yearMaxControl.value) : null;

    this.filteredMovies = this.moviesList.filter(movie => 
      movie.title.toLowerCase().includes(filtroTitulo) &&
      (filtroGenero ? movie.genre === filtroGenero : true) &&
      (filtroYearMin ? movie.year >= filtroYearMin : true) &&
      (filtroYearMax ? movie.year <= filtroYearMax : true) &&
      movie.rating >= this.ratingMin &&
      movie.rating <= this.ratingMax
    );
  }
}
