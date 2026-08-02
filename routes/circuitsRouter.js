const express = require('express');
const circuitsRouter = express.Router();

circuitsRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
        next();
    })
    .get((req, res) => {
        res.end('Will send all the circuits to you');
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /circuits');
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /circuits');
    })
    .delete((req, res) => {
        res.statusCode = 403;
        res.end('DELETE operation not supported on /circuits');
    });

circuitsRouter.route('/:circuit')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
        next();
    })
    .get((req, res) => {
        res.end(`Will send details of the circuit: ${req.params.circuit}`);
    })
    .post((req, res) => {
        res.end(`POST circuit details for one specific circuit on /circuits/${req.params.circuit}`);
    })
    .put((req, res) => {
        res.write(`Updating the circuit: ${req.params.circuit}\n`);
        res.end(`Will update the circuit: ${req.body.name}\n\t\twith description: ${req.body.description}`);
    })
    .delete((req, res) => {
        res.end(`Deleting circuit: ${req.params.circuit}`);
    });

module.exports = circuitsRouter;