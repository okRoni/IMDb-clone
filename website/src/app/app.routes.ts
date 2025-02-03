import { Routes } from '@angular/router';
//Login
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
//Movies
import { MoviesPageComponent } from './movies/movies-page/movies-page.component';
import { EditMovieComponent} from './movies/edit-movie/edit-movie.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
//Actors
import { ActorPageComponent } from './actors/actor-page/actor-page.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'movies',
    component: MoviesPageComponent,
    children: [
      {path: 'edit/:id', component: EditMovieComponent},
      {path: 'create', component: CreateMovieComponent},
      {path: '**', redirectTo: 'movies' }
    ]
  },
  {
    path: 'actors',
    component: ActorPageComponent,
    children: [
      {path: 'edit/:id', component: EditActorComponent},
      {path: 'create', component: CreateActorComponent},
      { path: '**', redirectTo: 'actors' }
    ]
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },

];
