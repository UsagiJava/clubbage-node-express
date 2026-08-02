const express = require('express');
const animationsRouter = express.Router();

animationsRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
        next();
    })
    .get((req, res) => {
        res.end('Will send all the animations to you');
    })
    .post((req, res) => {
        res.end('Will post animation details for a new boxer');
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /animations');
    })
    .delete((req, res) => {
        res.statusCode = 403;
        res.end('DELETE operation not supported on /animations');
    });

animationsRouter.route('/:boxerId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
        next();
    })
    .get((req, res) => {
        res.end(`Will send details of the animation for boxer: ${req.params.boxerId}`);
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /animations/${req.params.boxerId}`);
    })
    .put((req, res) => {
        res.end(`Updating the animation for boxer: ${req.params.boxerId}`);
    })
    .delete((req, res) => {
        res.end(`Deleting animation for boxer: ${req.params.boxerId}`);
    });


module.exports = animationsRouter;