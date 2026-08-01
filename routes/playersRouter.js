const express = require('express');
const playersRouter = express.Router();

playersRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
        next();
    })
    .get((req, res) => {
        res.end('Will send all the players to you');
    })
    .post((req, res) => {
        res.end('POST operation not supported on /players');
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /players');
    })
    .delete((req, res) => {
        res.end('DELETE operation not supported on /players');
    });

module.exports = playersRouter;