import "reflect-metadata";
import dotenv from 'dotenv';
//import app from './app';
import express from 'express';
import { AppDataSource } from "./database/db";
//import { MoviesController } from "./app/movies/movies.router";
//import { UserController } from "./app/user/user.router";
import userRouter from './app/user/user.router'
import moviesRouter from './app/movies/movies.router'
import saleRouter from './app/sales/sale.router'
import purchaseRouter from './app/purchase/purchase.router'
import purchasedetRouter from './app/purchase-details/purchasedetails.router'

const app = express()
app.use(express.json())

dotenv.config({});

// Start the application by listening to specific port
const port = Number(process.env.PORT || process.env.PORT || 8080);

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

app.use('/api/user', userRouter)
app.use('/api/movies', moviesRouter)
app.use('/api/sale', saleRouter)
app.use('/api/purchase', purchaseRouter)
app.use('/api/purchasedet', purchasedetRouter)

//Arreglar base de datos connection
async function StartDatabase() {
  await AppDataSource.initialize()
  console.log('Connected to DataBase')
}
StartDatabase();
