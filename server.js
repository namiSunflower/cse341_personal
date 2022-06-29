const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const connectDB = require('./db/connect')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
const mongoose = require('mongoose');
require('./config/passport')(passport)
const session = require('express-session')
const MongoStore = require('connect-mongo');
//const cors = require('cors)

const port = process.env.PORT || 3000;
const app = express();

connectDB();


mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(port, () => console.log(`Server running on port ${port}`));});

app
//.use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended : true }))
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Z-Key');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  })
  .use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
    store: MongoStore.create({mongoUrl: process.env.DB_CONNECTION})
  }))
  .use(passport.initialize())
  .use(passport.session());

  app.use(function (req, res, next) {
    res.locals.user = req.user || null
    next()
  })

app.use('/', require('./routes'))
  .use('/petHotel', swaggerUi.serve, swaggerUi.setup(swaggerFile));
  
