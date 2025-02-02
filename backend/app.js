import express from 'express'
import router from './routes/routes.js'
import { mongoose } from "mongoose";

const app = express()
const port = 3000

app.use(express.json())
app.use(router)

mongoose.connect('\mongodb+srv://admin:OJcwecbtAbrODw06@testcluster1.blnpa.mongodb.net/?retryWrites=true&w=majority&appName=TestCluster1')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Backend running on port ${port}`)
    });
  })
  .catch((err) => {
    console.log('Failed to connect to MongoDB', err);
  });


