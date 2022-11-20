import mongoose from "mongoose";

//Definiendo los tipos que cada campo recibirá en la bd
const storeSchema = mongoose.Schema({
  name: String,
  price: Number,
  image: String,
});

export default mongoose.model("store", storeSchema);
