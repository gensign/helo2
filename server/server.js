require('dotenv').config();

const express = require('express');
const app = express();

const session = require('express-session');
const massive = require('massive');

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const PORT = SERVER_PORT || 4000;

app.use(express.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 10
    }
}));

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(PORT, ()=> console.log(`Listening on PORT ${PORT}`));
});

// Authenication ENDPOINTS
// app.post()
// app.post()

// POST ENDPOINTS
// 
// 