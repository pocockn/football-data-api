const axios = require('axios');
const bodyParser = require('body-parser');
const config = require('./config')
const express = require('express');
const routes = require('./routes');
const store = require("./store")

axios.defaults.baseURL = config.app.baseURL;

axios.defaults.headers.common["x-auth-token"] = config.app.APIToken;
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Content-Type"] = "application/json;charset=UTF-8";

const app = express();

// Configure app to use bodyParser()
// Allow us to get the data from a POST request.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || config.app.port;

app.use('/api', routes);

app.listen(port);
console.log('Started on port ' + port);