const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb')

const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 8080;
const MONGO_URL = 'mongodb://admin:x4czTP4J@ds023373.mlab.com:23373/todo';

app.use('/', routes);

MongoClient
  .connect(MONGO_URL)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT);
    console.log('Server listening on port ' + PORT);
  })
  .catch(err => {
    throw err;
  });
