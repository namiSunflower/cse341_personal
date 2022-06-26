const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db/connect')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
const mongoose = require('mongoose');
const cors = cors = require('cors');

const port = process.env.PORT || 3000;
const app = express();

connectDB();

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: false}))
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Z-Key');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  }).use(cors())
  .use('/', require('./routes'))
  .use('/petHotel', swaggerUi.serve, swaggerUi.setup(swaggerFile));

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(port, () => console.log(`Server running on port ${port}`));});