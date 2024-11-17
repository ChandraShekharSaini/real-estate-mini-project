import express from 'express'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import path from 'path'


const PORT = process.env.PORT || 4444

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to DB');
  
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});

import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js'
import userRouter from './routes/user.route.js'


app.use('/api/user', userRouter);
app.use('/api/auth', authRouter)
app.use('/api/listing', listingRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});




