import express from 'express'
import router from './routes/routes.js'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Backend running on port ${port}`)
})

