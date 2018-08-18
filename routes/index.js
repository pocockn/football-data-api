const axios = require('axios');
const express = require('express');
const routes = express.Router();
var util = require('util')

routes.get('/status', function(req, res) {
    res.json(
        {
            message: 'service started'
        }
    );
});

routes.get('/user/team', (req, res) => {
    axios.get("competitions/2021/teams")
        .then(function(response) {
            res.json(response.data.teams)
        })
        .catch(function (error) {
            res.status(500)
            res.render('error', {error: error})
        })        
});

module.exports = routes;

