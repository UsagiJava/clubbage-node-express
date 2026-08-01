const express = require('express');
const morgan = require('morgan');
const animationsRouter = require('./routes/animationsRouter');
const circuitsRouter = require('./routes/circuitsRouter');
const playersRouter = require('./routes/playersRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/animations', animationsRouter);
app.use('/circuits', circuitsRouter);
app.use('/players', playersRouter);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    /* console.log(req.headers); // Morgan will log the request headers, so this line is commented out to avoid redundancy. */
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

// 404 Catch-all middleware (Must be placed last)
app.use((req, res, next) => {
    res.status(404).send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Not Found - 404</title>
    <style>
        body { font-family: sans-serif; text-align: center; padding: 50px; background-color: #f7f7f7; }
        h1 { font-size: 50px; color: #333; }
        p { font-size: 20px; color: #666; }
        a { color: #007bff; text-decoration: none; }
    </style>
</head>
<body>
    <h1>404</h1>
    <p>Oops! The page you are looking for does not exist.</p>
    <p><a href="/">Return to Home Page</a></p>
</body>
</html>`);
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});