require('dotenv').config()

const express = require('express')
const connectDB = require('./config/db')

connectDB();

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(PORT, () => {
  console.log(`spoty-ecommerce-project app listening on port ${PORT}!`)
});
