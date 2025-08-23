import { Router } from "express";
import { borrarColorPorId, crearColor, leerColor, leerColorPorId, test } from "../controllers/color.cotrollers.js";

const router = Router();

router.route("/test").get(test);
router.route("/").get(leerColor).post(crearColor)
router.route("/:id").get(leerColorPorId).delete(borrarColorPorId)

export default router;
