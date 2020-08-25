const cors = require('cors');
const express = require('express');
const routes = require('./routes');
require('./database/connection');
require('dotenv').config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

module.exports = app;