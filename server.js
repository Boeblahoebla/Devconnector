//////////////
// Imports //
////////////

const express = require('express');
const mongoose = require('mongoose');

const usersRoute = require('./routes/api/users');
const profileRoute = require('./routes/api/profile');
const postsRoute = require('./routes/api/posts');

const app = express();

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

app.use('/api/users', usersRoute);
app.use('/api/profile', profileRoute);
app.use('/api/posts', postsRoute);

//////////////////
// GET request //
////////////////

app.get('/', (req, res) => {
    res.send('Hello there');
});

////////////////////////////
// Server initialisation //
//////////////////////////

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));