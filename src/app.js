const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

//session
app.use(session({
    secret: 'originsw',
    resave: true,
    saveUninitialized: true,
  }))

// middeleware
app.use(cors({ origin: true, credentials: true  }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    req.session.count = req.session.count ? req.session.count + 1 : 1;
    res.json({ message: 'Bienvenidos a API - Origin Software'});
})

// routers
app.use('/api/auth', require('./routes/auth.route'));
app.use('/api/users', require('./routes/user.route'));
app.use('/api/twelvedata', require('./routes/twelvedata.route'));
app.use('/api/action', require('./routes/action.route'));

module.exports = app;