import { Router } from "express";
import { getHello, createActor, getActors, getActorById, deleteActor, updateActor, createMovie, getMovies, getMovieById, updateMovie, deleteMovie } from "../controllers/controllers.js";

const router = Router();

router.get('/', getHello);

router.post('/actors', createActor);

router.get('/actors', getActors);

router.get('/actors/:id', getActorById);

router.put('/actors/:id', updateActor);

router.delete('/actors/:id', deleteActor);

router.post('/movies', createMovie);

router.get('/movies', getMovies);

router.get('/movies/:id', getMovieById);

router.put('/movies/:id', updateMovie);

router.delete('/movies/:id', deleteMovie);

export default router;