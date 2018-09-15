//////////////
// Imports //
////////////

const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

///////////////////
// GET requests //
/////////////////

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public

router.get('/test', (req, res) => {
    res.json({ msg: "Users works" });
});

// @route   GET api/users/register
// @desc    Register users route
// @access  Public

router.post('/register', async (req, res) => {
    // Find already registered email
    User.findOne({ email: req.body.email })
        .then(user => {
        if (user) {
            return res.status(400).json({ email: 'Email already exists' });
        } else {
            const avatar = gravatar.url(req.body.email, {
                protocol: 'https', // HTTPS protocol
                s: '200', // Size
                r: 'pg', // rating
                d: 'mm' // Default
            });

            let newUser = new User({
                name: req.body.name,
                email: req.body.email,
                avatar: avatar,
                password: req.body.password,
            });

            // Encrypt the password with a salt and hash and set the result
            // as the password for the new user
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    // Try to save the new user to the database
                    newUser
                    .save()
                    .then((user) => res.json(user))
                    .catch((err) => console.log(err));
                });
            });
        }
    });
});

// @route   GET api/users/login
// @desc    Login users route -> Returns JSON web token
// @access  Public

router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // find user by email;
    User.findOne({ email }).then(user => {
        if(!user) {
            return res.status(404).json({ email: 'User not found' });
        }

        // Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if(isMatch) {
                // Create and return a JSON web token

                const payload = { id: user.id, name: user.name, avatar: user.avatar };

                // Sign the JWT
                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                    res.json({ succes: true, token: 'Bearer ' + token })
                });

            } else {
                return res.status(400).json({ password: 'Password incorrect' });
            }
        })
    })
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({ msg: 'Succes' });
});

//////////////
// Exports //
////////////

module.exports = router;
