require('dotenv').config();

const express = require('express');
const app = express();

const session = require('express-session');
const massive = require('massive');

const authCtrl = require('./controllers/authController');
const postCtrl =require('./controllers/postController');

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
}).catch(() => console.log('Unable to connect to Database'));

// Authenication ENDPOINTS
app.post('/api/auth/register', authCtrl.register);
app.post('/api/auth/login', authCtrl.login);
app.delete('/auth/logout', authCtrl.logout);

// POST ENDPOINTS
// app.get('', );
// app.get('', );
// app.post('', ); 