import mongoose, { Schema } from "mongoose";
import mongooseSlugPlugin from "mongoose-slug-plugin";
/*
    Represents a booster for the website; stores their information
*/

const boosterSchema = new Schema({
    name: { type: String, unique: true, require: true },
    img: { data: Buffer, contentType: String},
    email: { type: String, unique: true, require: true },
    rate: { type: Number, minimum: 1, require: true },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    creationDate: { type: Date, required: true }
});

boosterSchema.plugin(mongooseSlugPlugin, {tmpl: "<%=name%>"});
mongoose.model('Booster', boosterSchema);

const boosterModel = mongoose.model('Booster');

export default boosterModel;