import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';
import { mongoose } from "mongoose";

const app = express()
const port = 3000

app.use(cors());
app.use(express.json())
app.use(router)

console.log("Connecting to MongoDB..")
mongoose.connect('\mongodb+srv://admin:OJcwecbtAbrODw06@testcluster1.blnpa.mongodb.net/?retryWrites=true&w=majority&appName=TestCluster1')
  .then(() => {
    console.log('Connection to MongoDB established');
    app.listen(port, () => {
      console.log(`Backend running on http://localhost:${port}/`)
    });
  })
  .catch((err) => {
    console.log('Failed to connect to MongoDB', err);
  });


