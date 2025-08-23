import Color from "../models/color.models.js";

export const test = (req, res) => {
  res.status(200);
  res.send("Primera prueba desde el backend");
};

export const leerColor = async (req, res) => {
  try {
    const listaColores = await Color.find({});
    res.status(200).json(listaColores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error  al leer un producto" });
  }
};

export const leerColorPorId = async (req, res) => {
  try {
    const colorBuscado = await Color.findById(req.params.id);
    if (!colorBuscado) {
      return res.status(404).json({ mensaje: "Color no encontrado" });
    }

    res.status(200).json(colorBuscado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener el color" });
  }
};

export const crearColor = async (req, res) => {
  try {
    const nuevoColor = new Color(req.body);
    await nuevoColor.save();

    res.status(201).json({ mensaje: "El color fue creado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear el color" });
  }
};

export const borrarColorPorId = async (req, res) => {
  try {
    const colorEliminado = await Color.findByIdAndDelete(req.params.id);
    if (!colorEliminado) {
      return res.status(404).json({ mensaje: "Color no encontrado" });
    }

    res.status(200).json({ mensaje: "Color eliminado con exito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al eliminar el color" });
  }
};

export const editarColorPorId = async (req, res) => {
  try {

    const colorModificado = await Color.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!colorModificado) {
      return res.status(404).json({ mensaje: "Color no encontrado" });
    }

    res.status(200).json({ mensaje: "Color modificado con exito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al modificar el color" });
  }
};
