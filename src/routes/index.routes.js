import coloresRoutes from "./color.routes.js";
import { Router } from "express";

const router = Router();

router.use("/colores", coloresRoutes);

export default router;
