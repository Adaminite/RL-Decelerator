import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

import UserRouter from './backend/routers/users.mjs';
import BoosterRouter from './backend/routers/boosters.mjs';

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/api/users', UserRouter);
app.use('/api/boosters', BoosterRouter);

app.use(express.static(path.join(__dirname, '/frontend/dist')));
app.use(express.static(path.join(__dirname, '/frontend/dist/assets')));
app.get('*', (req, res) => {
    res.sendFile( path.join(__dirname, '/frontend/dist/index.html'));
}); 

app.listen(process.env.PORT || 3000);
