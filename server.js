//////////////
// Imports //
////////////

const express = require('express');
const mongoose = require('mongoose');

const usersRoute = require('./routes/api/users');
const profileRoute = require('./routes/api/profile');
const postsRoute = require('./routes/api/posts');
const bodyParser = require('body-parser');
const passport = require('passport');
const morgan = require('morgan');

const app = express();

const path = require('path');

////////////////////////////
// Database connectivity //
//////////////////////////

const db = require('./config/keys').mongoURI;
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('Problem connecting to mongodb: ', err));

/////////////////
// Middleware //
///////////////

// forms & parsing
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Logging
app.use(morgan('tiny'));

// Authentication & Passport Config (strategy)
app.use(passport.initialize());
require('./config/passport')(passport);

// Routes
app.use('/api/users', usersRoute);
app.use('/api/profile', profileRoute);
app.use('/api/posts', postsRoute);

// Server static assets if in production
if(process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

////////////////////////////
// Server initialisation //
//////////////////////////

const port = process.env.port || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));