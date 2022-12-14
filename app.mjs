import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import UserRouter from './backend/routers/users.mjs';
import BoosterRouter from './backend/routers/boosters.mjs';
import ReviewRouter from './backend/routers/reviews.mjs';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', UserRouter);
app.use('/api/boosters', BoosterRouter);
app.use('/api/reviews', ReviewRouter);

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) => {
    res.sendFile( path.join(__dirname, '/frontend/dist/index.html'));
}); 


app.listen(process.env.PORT || 3000);
