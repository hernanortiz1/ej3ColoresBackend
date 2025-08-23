import Color from "../models/color.models.js"

export const test = (req, res) => {
  res.status(200);
  res.send("Primera prueba desde el backend");
};

export const leerColor = (req, res)=>{
}

export const crearColor = async (req, res) =>{
    try {
      
        const nuevaColor = new Color(req.body)
        await nuevaColor.save(); 
  
    res.status(201).json({mensaje: "El color fue creado exitosamente"}) 
    } catch (error) {
        console.error(error);
        res.status(500).json({mensaje: "Error al crear el color"})
    }
    
}