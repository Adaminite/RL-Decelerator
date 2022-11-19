import mongoose, { Schema } from "mongoose";
/*
    Represents a single review for a booster
*/

const reviewSchema = new Schema({
    rating: { type: Number, require: true, min: 1, max: 5 },
    content: { type: String, require: true },
    username: { type: String, require: true },
    date: { type: Date, require: true, default: Date.now }
});

mongoose.model('Review', reviewSchema);

const reviewModel = mongoose.model('Review');

export default reviewModel;