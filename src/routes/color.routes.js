import { Router } from "express";
import { crearColor, leerColor, test } from "../controllers/color.cotrollers.js";

const router = Router();

router.route("/test").get(test);
router.route("/").get(leerColor).post(crearColor)

export default router;
