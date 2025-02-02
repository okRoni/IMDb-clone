import { Router } from "express";
import { getHello } from "../controllers/controllers.js";

const router = Router();

router.get('/', getHello);

export default router;