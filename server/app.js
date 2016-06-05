const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 8080;
// Sensitive data should be stored as env variables
const MONGO_URL = 'mongodb://admin:x4czTP4J@ds023373.mlab.com:23373/todo';

app.use('/', routes);

mongoose.connect(MONGO_URL);

app.listen(PORT);
console.log(`Server listening on port ${PORT}`); // eslint-disable-line no-console
