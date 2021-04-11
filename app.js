// Bring the hommies in
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const hbs = require('express-handlebars');

// Load config

dotenv.config({ path: './config/config.env'});

const app = express();

// Dev Logging 
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev')); 
}

// Aditya's gift to me (HBS)

app.engine('.hbs', hbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

// public shit

app.use(express.static(path.join(__dirname,'public')));

// Routes

app.use('/', require("./routes/index"))

const PORT = process.env.PORT || 3000;

app.listen(
    PORT, 
    console.log(`Server Running in ${process.env.NODE_ENV} mode on PORT ${PORT}`)
    );


