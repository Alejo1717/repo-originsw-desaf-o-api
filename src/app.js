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
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(express.json());

app.get('/', (req, res) => {
    req.session.count = req.session.count ? req.session.count + 1 : 1;
})

// routers
//app.use('/api/user', require('./routes/userRouter'));
//app.use('/api/login', require('./routes/authRouter'));


module.exports = app;