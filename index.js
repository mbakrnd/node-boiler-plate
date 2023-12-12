const express = require('express');
const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');

// Import all env vars from .env file


const app = express();

const port = process.env.PORT || 8000;

global.__basedir = __dirname;

app.use(express.json())


// Instantiates a client
const client = new SecretManagerServiceClient();

const name = 'projects/nacitatestproject/secrets/client-id/versions/latest';

async function accessSecretVersion() {
    const [version] = await client.accessSecretVersion({
        name: name,
    });

    // Extract the payload as a string.
    const payload = version.payload.data.toString();

    // WARNING: Do not print the secret in a production environment - this
    // snippet is showing how to access the secret material.
    console.info(`Payload: ${payload}`);
}



app.get('/', async (req, res) => {
    accessSecretVersion();
    console.log(process.env.ENV)
    res.send('Welcome to Node boiler plate!')
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}!`);
});

