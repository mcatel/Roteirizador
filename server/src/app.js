import cors from 'cors';
import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';

dotenv.config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

export default app;