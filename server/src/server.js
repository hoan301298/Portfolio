const http = require('http');
const app = require('./app');
require('dotenv').config();

const { mongoConnect } = require('./data/mongo');

const server = http.createServer(app);
const PORT = process.env.PORT;

async function startServer(){
    await mongoConnect();

    server.listen(PORT, () => {
        console.log(`Server is running on Port ${PORT}...`)
    });
};

startServer();