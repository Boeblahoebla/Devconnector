//////////////
// Imports //
////////////

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('../config/keys');

//////////////////
// Token setup //
////////////////

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

//////////////
// Exports //
////////////

// Export the passport and make the passport use a new JWT strategy,
// based on the options provided
module.exports = passport => {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.findById(jwt_payload.id)
        .then(user => {
            if(user) {
                return done(null, user);
            }
            return done(null, false);
        })
        .catch(err => console.log(err));
    }));
};