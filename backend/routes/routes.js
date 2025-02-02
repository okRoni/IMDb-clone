import { Router } from "express";
import { getHello, createActor, getActors, getActorById } from "../controllers/controllers.js";

const router = Router();

router.get('/', getHello);

// to create actors
router.post('/actors', createActor);

router.get('/actors', getActors);

router.get('/actors/:id', getActorById);

export default router;