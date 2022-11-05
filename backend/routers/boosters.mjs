import express from 'express';
import Boosters from '../models/Booster.model.mjs';

const router = express.Router();

router.post('/add', (req, res) => {
    try{

    }
    catch(err){
        console.log(err);
        res.send({error: err});
    }
});

export default router;