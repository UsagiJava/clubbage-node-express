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
        res.end('POST operation not supported on /animations');
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /animations');
    })
    .delete((req, res) => {
        res.end('DELETE operation not supported on /animations');
    });

module.exports = animationsRouter;