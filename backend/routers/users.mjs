import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.model.mjs';

const router = express.Router();

router.post('/register', async (req, res) => {
    try{
        const data = req.body;
        const foundUser = await User.findOne({username: data.username});
        if(!foundUser){
            throw 'Username already taken';
        }

        const foundEmail = await User.findOne({email: data.email.toLowerCase()});
        if(!foundEmail){
            throw 'Email already used';
        }

        const hash = await bcrypt.hash(req.password, 10);

        const newUser = new User({
            username: data.username,
            password: hash,
            email: data.email.toLowerCase()
        });

        const saved = await newUser.save();
        res.send(saved);
    } 
    catch(err){
        console.log(err);
        res.send({error: err});
    }
});


export default router;