import { Router } from "express";
import { getHello, createActor, getActors, getActorById, deleteActor, updateActor } from "../controllers/controllers.js";

const router = Router();

router.get('/', getHello);

router.post('/actors', createActor);

router.get('/actors', getActors);

router.get('/actors/:id', getActorById);

router.put('/actors/:id', updateActor);

router.delete('/actors/:id', deleteActor);

export default router;