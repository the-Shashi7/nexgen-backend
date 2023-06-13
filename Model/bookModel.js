//{Title:"Book",author:"Shadab",rating:5}

import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    author:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    }
},{timestamps:true})

export default mongoose.model('book',bookSchema);