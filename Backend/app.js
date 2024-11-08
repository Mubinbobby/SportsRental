const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express()

require('dotenv').config()
const PORT = process.env.PORT;

app.use(
    cors({
        orgin : 'http://localhost:5173/',
        methods : ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders : [
            'Content-Type',
            'Authorization',
            'Catche-Control',
            'Expires',
            'Pragma'
        ],
        crtedentials : true
    })
);

require('./db/connection');

app.use(cookieParser());
app.use(express.json());

app.listen(PORT,()=> console.log(`Server is now running on port ${PORT}`))