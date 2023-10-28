import express from 'express';
import dotenv from 'dotenv'
import bodyparser from 'body-parser';
import cors from 'cors';


// function calls
import Connection from './database/db.js';
import DefaultData from './default.js';
import router from './routes/routes.js';




dotenv.config();

const app = express();
app.use(bodyparser.json({extended: true}))
app.use(bodyparser.urlencoded({ extended: true}))
app.use(cors());

app.use('/',router);

const PORT = 8000;

const URL = process.env.MONGO_URL

Connection(URL);
app.listen(PORT, () => console.log(`App running in ${PORT}`));

// Default data to database

DefaultData();