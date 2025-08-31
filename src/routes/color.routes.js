import { Router } from "express";
import { borrarColorPorId, crearColor, editarColorPorId, leerColor, leerColorPorId, test } from "../controllers/color.cotrollers.js";
import validacionColor from "../middleware/validarColor.js";

const router = Router();

router.route("/test").get(test);
router.route("/").get(leerColor).post(validacionColor, crearColor)
router.route("/:id").get(leerColorPorId).delete(borrarColorPorId).put(validacionColor, editarColorPorId)

export default router;
