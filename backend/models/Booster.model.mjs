import mongoose, { Schema } from "mongoose";

/*
    Represents a booster for the website; stores their information
*/

const boosterSchema = new Schema({
    name: {type: String, unique: true, require: true},
    img: {data: Buffer, contentType: String},
    email: {type: String, unique: true, require: true},
    rate: {type: Number, minimum: 1, require: true}
});


mongoose.model(boosterSchema);

const boosterModel = mongoose.model('Booster', boosterSchema);


export default boosterModel;