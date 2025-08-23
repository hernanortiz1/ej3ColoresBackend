import { Router } from "express";
import { test } from "../controllers/color.cotrollers.js";

const router = Router();

router.route("/test").get(test);

export default router;
