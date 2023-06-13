import express from 'express';
import mongoose from 'mongoose';
import Route from './Route/bookRoute.js';
const app =  express();
const PORT = 8080;

const ConnectToDB = async() => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/nexgen')
        console.log('DB is connected')
      } catch (error) {
        handleError(error);
      }
}
ConnectToDB();

app.use(express.json())
app.use(express.urlencoded())
app.use('/api/v1/',Route);

app.listen(PORT,()=>{
    console.log(`Server is Listening on Port : ${PORT}`);
})