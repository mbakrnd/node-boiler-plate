const express = require('express');
// Import all env vars from .env file
require('dotenv').config()
export const MY_SECRET_KEY = process.env.MY_SECRET_KEY
console.log(MY_SECRET_KEY) // => Hello

const app = express();

const port = process.env.PORT || 8000;

global.__basedir = __dirname;

app.use(express.json())




app.get('/', async (req, res) => {
    console.log(process.env.ENV)
    res.send('Welcome to Node boiler plate!')
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}!`);
});

