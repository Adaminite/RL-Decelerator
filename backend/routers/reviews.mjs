import express from 'express';
import User from '../models/User.model.mjs';
import Review from '../models/Review.model.mjs';

const router = express.Router();

router.post('/add', async (req, res) => {
    try {
        const data = req.body;
        
        const foundUser = await User.findOne({ username: data.username });
        if (!foundUser) {
            throw 'Invalid user';
        }

        const newReview = new Review({
            username: data.username,
            rating: data.rating,
            content: data.content
        });
        const savedReview = await newReview.save();

        foundUser.reviews.push(savedReview._id);
        await foundUser.save();

        res.send({ data });
    }
    catch (err) {
        console.log(err);
        res.send({ error: err });
    }
});

export default router;
