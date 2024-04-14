const express = require('express')
const connectDb = require('./lib/connect')
const cors = require('cors')
const bodyParser = require("body-parser");
const port = 3000;
const app = express()

// Allow requests from specific origins
const allowedOrigins = ['https://ssacademy.vercel.app'];

// create application/json parser
app.use(bodyParser.json());

app.use(cors({
    origin: function(origin, callback) {
        // Check if the origin is allowed, or if it's undefined (e.g., from Postman)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));

connectDb()

app.use('/api/auth', require('./routes/auth'))
app.use('/api/student', require('./routes/enroll'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
