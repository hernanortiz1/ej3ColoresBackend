import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionColor = [
  body("inputColor")
    .notEmpty()
    .withMessage("El nombre del color es obligatorio")
    .isLength({ min: 2, max: 20 })
    .withMessage("El nombre del color debe tener entre 2 y 100 caracteres"),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionColor;
