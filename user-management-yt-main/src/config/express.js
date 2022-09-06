// este archivo crea la app de express y la puedo reutilizar  
import userRouter from '#Routes/user.routes.js';
import express from 'express';

const expressApp = express();

// Middelewares
expressApp.use(express.json())

// Routes
expressApp.use('/user',userRouter);


export default expressApp;