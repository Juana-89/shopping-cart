import express from 'express';
import mongoose from 'mongoose'
import store from '../api/models/store.js'
const app=express();
const port=4000

const url ='mongodb+srv://adminJane:xVFFm79bfsmFxyuv@myfirstcluster.r4c8skb.mongodb.net/clothes?retryWrites=true&w=majority'
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology:true})
app.use(express.json({limit:'50mb'}))
app.post('/api/clothing', (req, res) => {
    let clotheData =req.body
    let mongoRecord = []
    clotheData.forEach(wear => {
        mongoRecord.push({
            name: wear.name,
            price: wear.price,
            image: wear.image,
        })
    })
    //console.log(req.body)
    //res.send('tienes posted something')
    store.create(mongoRecord, (error, record) => {
        if(error){
            res.status(400).send(error)
        }else{
            res.status(200).send(record)
        }
    })
})
app.get('/', (req,res) => {
    res.send('holaaaaaaaaaa')
});

app.listen(port, ()=> {
    console.log(`Server funciona en el puerto${port}`)
})