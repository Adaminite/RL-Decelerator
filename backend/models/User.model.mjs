import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: {type: String, unique: true, require: true},
    password: {type: String, require: true},
    email: {type: String, unique: true, require: true}
});


mongoose.model(userSchema);

const userModel = mongoose.model('User', userSchema);


export default userModel;