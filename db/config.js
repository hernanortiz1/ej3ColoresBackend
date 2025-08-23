import mongoose from "mongoose";

try {
  mongoose.connect(process.env.MONGODB).then(() => {
    console.info("BD ej3 conectada");
  });
} catch (error) {
  console.error(error);
}
