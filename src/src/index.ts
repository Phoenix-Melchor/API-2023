import "reflect-metadata";
import dotenv from 'dotenv';
import app from './app';
import express from 'express';

dotenv.config({});

// Start the application by listening to specific port
const port = Number(process.env.PORT || process.env.PORT || 8080);

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})