import mongoose, { Schema } from "mongoose";

/*
    Represents a user for a website; stores the basic information (for the sake
    of authentication); more info will be added TBD
*/

const userSchema = new Schema({
    username: {type: String, unique: true, require: true},
    password: {type: String, require: true},
    email: {type: String, unique: true, require: true}
});


mongoose.model('User', userSchema);

const userModel = mongoose.model('User');


export default userModel;