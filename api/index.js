import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRouter from './routes/user.route.js';


mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected to db');
}).catch((err) => {
    console.log(err);   
});

const app = express();



app.listen(3000, () => {
    console.log('Server is ruining on Port 3000..!');
});

app.get('/test', (req, res) => {
    res.send('Hello World');
});


app.use('/api/user', userRouter);