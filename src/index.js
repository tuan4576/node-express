const express = require('express')
const path = require('path')
const app = express()
const morgan = require('morgan') 
const route  = require('./router/router')
const db = require('./config/db/mongodb')
require('dotenv').config();

db.connect();
app.use(express.static(path.join(__dirname,'public')))
app.use(morgan('combined'))


// init router
route(app)  

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})