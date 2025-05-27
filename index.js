import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();



import {
  userRouter, authRouter, exchangeRouter,
  bookRouter, reviewRouter, deliveryRouter,
  countryRouter, genreRouter, favoriteRouter,
  languagesRouter

} from './routes/index.js';

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());


app.use('/api/auth', authRouter);
app.use('/api', userRouter);
app.use('/api', exchangeRouter);
app.use('/api', bookRouter);
app.use('/api', reviewRouter);
app.use('/api', deliveryRouter);
app.use('/api', countryRouter);
app.use('/api', genreRouter);
app.use('/api', favoriteRouter);
app.use('/api', languagesRouter);


app.listen(PORT, () => console.log(`server startet on post${PORT}`));