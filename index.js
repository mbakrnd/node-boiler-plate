const express = require('express');

const app = express();

const port = process.env.PORT || 8000;

global.__basedir = __dirname;

app.use(express.json())




app.get('/', async (req, res) => {
    res.send('Welcome to Node boiler plate!')
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}!`);
});

