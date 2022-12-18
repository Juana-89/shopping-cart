import express from "express";
import mongoose from "mongoose";
import store from "../api/models/store.js";
import cors from 'cors'
const app = express();
const port = 4000;

const url =
  "mongodb+srv://adminJane:xVFFm79bfsmFxyuv@myfirstcluster.r4c8skb.mongodb.net/clothes?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json({ limit: "150mb" }));
app.use(cors({origin:"http://127.0.0.1:5173"}))
//Creación de la tabla en MongoDB
app.post("/api/clothing", (req, res) => {
  let clotheData = req.body;
  let mongoRecord = [];
  clotheData.forEach((wear) => {
    mongoRecord.push({
      name: wear.name,
      price: wear.price,
      image: wear.image,
    });
  });
  //console.log(req.body)
  store.create(mongoRecord, (error, record) => {
    error ? res.status(400).send(error) : res.status(200).send(record);
  });
});

//Mostrar info en la url localhost
app.get("/api/clothing", (req, res) => {
  //res.send('holaaaaaaaaaa')
  store.find({}, (error, docs) => {
    error ? res.status(400).send(error) : res.status(200).send(docs);
  });
});

app.listen(port, () => {
  console.log(`Server funciona en el puerto${port}`);
});
