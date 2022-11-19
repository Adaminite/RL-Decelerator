import express from 'express';
import multer from 'multer';
import Booster from '../models/Booster.model.mjs';

const router = express.Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now());
    }
});

const upload = multer({ storage: storage });

router.post('/add', upload.single('image'), async (req, res) => {
    try {

        const data = req.body;
        const name = data.name;
        const rate = data.rate;
        const creationDate = data.creationDate;
        const email = data.email;
        const reviews = [];

        const foundBooster = await Booster.findOne({ email: email });
        if (foundBooster) {
            throw 'This account is already registered as a booster!';
        }
        const newBooster = new Booster({
            name, rate, creationDate, email, reviews
        });

        const saved = await newBooster.save();

        res.send(saved);


    }
    catch(err){
        console.log(err);
        res.send({error: err});
    }
});

router.get('/find', async (req, res) => {
    const query = req.query;
    const slug = query.slug;
    try {
        const result = await Booster.find({ slug });
        res.send(result);
    }
    catch (err) {
        res.send({ error: err });
    }
    
});

export default router;