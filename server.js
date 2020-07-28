const express = require("express");
const mongoose = require("mongoose");
const path = require('path');

const bodyParser = require("body-parser");

require("dotenv");


// app
const app = express();

// db
mongoose
    .connect(process.env.MONGOURI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true 
    })
    .then(() => console.log("DB Connected"));

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));



const Port = process.env.PORT || 5000;

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});
