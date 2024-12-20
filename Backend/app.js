const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRouter = require("./routes/auth/auth-routes");

const app = express()


require('dotenv').config()
const PORT = process.env.PORT;

app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "DELETE", "PUT"],
      allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma",
      ],
      credentials: true,
    })
  );

require('./db/connection');

app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRouter)

app.listen(PORT,()=> console.log(`Server is now running on port ${PORT}`))