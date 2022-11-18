import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.model.mjs';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

router.post('/register', async (req, res) => {
    try{
        const data = req.body;
        const foundUser = await User.findOne({username: data.username});
        if(foundUser){
            throw 'Username already taken';
        }

        const foundEmail = await User.findOne({email: data.email.toLowerCase()});
        if(foundEmail){
            throw 'Email already used';
        }

        console.log('reached');

        const hash = await bcrypt.hash(data.password, 10);

        const newUser = new User({
            username: data.username,
            password: hash,
            email: data.email.toLowerCase()
        });

        const saved = await newUser.save();
        console.log(saved);
        const token = await jwt.sign({ username: newUser.username, email: newUser.email }, process.env.SECRET_KEY,
        {expiresIn: '3600', algorithm: 'HS256'}); // add token stuff here
        
        console.log(token);

        res.send({username: saved.username, token});
    } 
    catch (err) {
        console.log(err);
        res.send({error: err});
    }
});


export default router;