const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
require('dotenv').config();

const app = express();

// Konfiguracja EJS
app.set('view engine', 'ejs');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

// Połączenie z bazą
mongoose.connect(process.env.MONGO_URI);

// Routery
app.use('/', require('./routes/auth'));
app.use('/', require('./routes/clicker'));

app.listen(process.env.PORT, () => console.log(`Działa na porcie ${process.env.PORT}`));