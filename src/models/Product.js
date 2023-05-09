import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: String,
    category:String,
    price:Number,
    imageUrl:String
}, {timestamps:true,
versionKey: false})

export default model('Product',productSchema)