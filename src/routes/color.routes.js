import { Router } from "express";
import { crearColor, leerColor, leerColorPorId, test } from "../controllers/color.cotrollers.js";

const router = Router();

router.route("/test").get(test);
router.route("/").get(leerColor).post(crearColor)
router.route("/:id").get(leerColorPorId)

export default router;
