const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const api = require('./routes/api');

const RENDER_URL = process.env.RENDER_URL || null;
const PUBLIC_URL = process.env.PUBLIC_URL || "https://www.hoantran.eu";

const allowedOrigins = [
    'http://localhost:3000',
    RENDER_URL,
    PUBLIC_URL
];

app.use(cors({
    origin: function (origin, callback) {
        if(!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(morgan('combined'));
app.use(express.json());

app.use('/api', api);

module.exports = app;