import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
import { connectToDB } from './db/connectDB.js';
import urlRouter from './routes/url.route.js';


const app = express();


// express middlewares
app.use(cors({
    origin: '*', // or specify specific domains like 'http://localhost:4000'
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type,Authorization',
}));

app.use(morgan('dev'))
app.use(express.json());

app.get('/test', (req, res) => {
    res.send('Welcome');
})

// routes
app.use('/' , urlRouter)
// Serve static files
app.use(express.static('public'));


connectToDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`server started at ${process.env.PORT}`);
    })
}).catch((error) => {
    console.log("Failed to connect database", error);
}) 