import mongoose, { Schema } from "mongoose";

const colorSchema = new Schema({
  inputColor: {
    type: String,
    required: true,
    minLenght: 3,
    maxLenght: 20,
    unique: true,
  },
});
const Color = mongoose.model("color", colorSchema);

export default Color;