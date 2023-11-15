import "reflect-metadata";
import dotenv from 'dotenv';
//import app from './app';
import express from 'express';
import { AppDataSource } from "./database/db";
import { MoviesController } from "./app/movies/movies.router";
//import { UserController } from "./app/user/user.router";
import userRouter from './app/user/user.router'

const app = express()
app.use(express.json())

dotenv.config({});

// Start the application by listening to specific port
const port = Number(process.env.PORT || process.env.PORT || 8080);

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

app.get('/ping', (_req, res) => {
  res.send('pong')
})

app.use('/api/user', userRouter)

//Arreglar base de datos connection
async function StartDatabase() {
  await AppDataSource.initialize()
  console.log('Connected to DataBase')
}
StartDatabase();
