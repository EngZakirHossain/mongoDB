const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;
//create schema for product
const productsSchema = new mongoose.Schema({
    title: {type:String,require:true},
    price:Number,
    description: {type:Date,default: Date.now()},

})
//create Model  for product

const Product = mongoose.model("Products")

//connect to mongo db using await
const connectDB = async ()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/users');
        console.log('Database is Connected');
    }catch (e) {
        console.log('Error,DB is not Connected');
        console.log(e.message);
        process.exit(1);
    }
}

app.get('/',(req, res)=>{
    res.send('Server Is Running');
})


app.listen(PORT,async ()=>{
    console.log(`Server Running at http://localhost:${PORT}`);
    await connectDB();
})