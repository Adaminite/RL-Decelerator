import express from 'express';
import Booster from '../models/Booster.model.mjs';
import Review from '../models/Review.model.mjs';

const router = express.Router();

router.post('/add', async (req, res) => {
    try {
        const data = req.body;
        
        console.log(data);

        const foundBooster = await Booster.findOne({ slug: data.slug });
        if (!foundBooster) {
            throw 'Invalid user';
        }

        const newReview = new Review({
            username: data.username,
            rating: data.rating,
            content: data.content
        });
        const savedReview = await newReview.save();

        console.log(foundBooster);
    
        foundBooster.reviews.push(savedReview._id);
        await foundBooster.save();

        res.send({ data });
    }
    catch (err) {
        console.log(err);
        res.send({ error: err });
    }
});

export default router;
