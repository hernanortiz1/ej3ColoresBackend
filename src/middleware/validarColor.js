import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionColor = [
  body("inputColor")
    .notEmpty()
    .withMessage("El nombre del producto es obligatorio")
    .isLength({ min: 2, max: 100 })
    .withMessage("El nombre del producto debe tener entre 2 y 100 caracteres")
    .custom((valor) => {
      const colorIngresado = new Option().style;
      colorIngresado.color = valor;
      if (colorIngresado.color === "") {
        throw new Error("Debe ingresar un nombre de color válido");
      }
      return true;
    }),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionColor;
