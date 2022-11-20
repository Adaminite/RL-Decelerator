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

        const hash = await bcrypt.hash(data.password, 10);

        const newUser = new User({
            username: data.username,
            password: hash,
            email: data.email.toLowerCase()
        });

        const saved = await newUser.save();
        const token = jwt.sign({ username: newUser.username, email: newUser.email }, process.env.SECRET_KEY,
        {expiresIn: '3600', algorithm: 'HS256'}); // add token stuff here

        res.send({username: saved.username, token});
    } 
    catch (err) {
        console.log(err);
        res.send({error: err});
    }
});

router.post('/login', async (req, res) => {
    try {
        const data = req.body;

        const username = data.username;

        const foundUser = await User.findOne({ username: username });
        if (!foundUser) {
            throw 'Invalid credentials';
        }
        const password = data.password;
        const result = await bcrypt.compare(password, foundUser.password);

        if (result) {
            const token = jwt.sign({ username: foundUser.username, email: foundUser.email }, process.env.SECRET_KEY,
                { expiresIn: '3600', algorithm: 'HS256' }); 
            res.send({ username: foundUser.username, token });
        }
        else {
            throw 'Invalid credentials';
        }
    }
    catch (err) {
        res.send({ error: err });
    }
});

router.post('/get', async (req, res) => {
    
    const data = req.body;
    const username = data.username;
    try {
        const foundUser = await User.findOne({ username: username });

        if (!foundUser) {
            throw 'User not found';
        } 
        
        res.send({ email: foundUser.email, username: username, joinDate: foundUser.createdOn });
    }
    catch (err) {
        res.send({ error: err });
    }
});

export default router;