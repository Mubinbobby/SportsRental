const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const cors = require('cors');

mongoose.connect("mongodb+srv://bobbymubinm:mubin123123@cluster0.qwsz1.mongodb.net/").then(()=>console.log('Connection Established'))
.catch((error) => console.log('Error in Connection'));

const app = express()
const PORT = process.env.PORT || 5000;

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

app.use(cookieParser());
app.use(express.json());

app.listen(PORT,()=> console.log(`Server is now running on port ${PORT}`))
