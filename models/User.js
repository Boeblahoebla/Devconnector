//////////////
// Imports //
////////////

const mongoose = require('mongoose');
const schema = mongoose.Schema;

/////////////
// Schema //
///////////

const userSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

//////////////
// Exports //
////////////

module.exports = User = mongoose.model('users', userSchema, 'users');
