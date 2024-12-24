import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
import { connectToDB } from './db/connectDB.js';

const app = express();

// express middlewares
app.use(cors());
app.use(morgan('dev'))
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome');
})



connectToDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`server started at ${process.env.PORT}`);
    })
}).catch((error) => {
    console.log("Failed to connect database", error);
}) 