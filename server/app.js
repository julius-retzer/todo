const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const PORT = process.env.PORT || 8080;
// Sensitive data should be stored as env variables
const MONGO_URL = 'mongodb://admin:x4czTP4J@ds023373.mlab.com:23373/todo';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/', routes);

mongoose.connect(MONGO_URL);

app.listen(PORT);
console.log(`Server running on http://localhost:${PORT}`); // eslint-disable-line no-console
