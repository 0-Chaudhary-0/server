const express = require('express')
const connectDb = require('./lib/connect')
const cors = require('cors')
const bodyParser = require("body-parser");
const port = 3000;
const app = express()

// create application/json parser
app.use(bodyParser.json());
app.use(cors({
  origin: 'https://ssacademy.vercel.app', // Allow requests from this origin
  methods: ['GET', 'POST'], // Allow only specific HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow only specific headers
}))

connectDb()

app.use('/api/auth', require('./routes/auth'))
app.use('/api/student', require('./routes/enroll'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
