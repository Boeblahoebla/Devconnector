//////////////
// Imports //
////////////

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// Security
const passport = require('passport');

// Validation
const validateProfileInput = require('../../validation/profile');

///////////////////
// GET requests //
/////////////////

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => {
    res.json({ msg: "Profile works" });
});


// @route   GET api/profile
// @desc    Get profile of current user
// @access  Private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    // Create empty errors object
    const errors = {};

    Profile.findOne({ user: req.user.id })
    .populate('user', ['name', 'avatar'])
    .then(profile => {
        if (!profile) {
            // Add error to errors object and pass it with the response
            errors.noProfile = ('There is no profile for this user');
            return res.status(404).json(errors);
        }
        // If succeeded, respond with profile
        res.json(profile);
    })
    // Catch error when reading from database failed
    .catch(err => res.status(400).json(err));
});


// @route   POST api/profile
// @desc    Create or edit profile of current user
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    // Validate the input of the req.body
    const { errors, isValid } = validateProfileInput(req.body);

    // Check validation
    if(!isValid) {
        return res.status(400).json(errors);
    }

    // Get fields
    const profileFields = {};
    profileFields.user = req.user.id;

    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.company) profileFields.company = req.body.company;
    if (req.body.website) profileFields.website = req.body.website;
    if (req.body.location) profileFields.location = req.body.location;
    if (req.body.bio) profileFields.bio = req.body.bio;
    if (req.body.status) profileFields.status = req.body.status;
    if (req.body.githubUsername) profileFields.githubUsername = req.body.githubUsername;
    if (req.body.handle) profileFields.handle = req.body.handle;

    // Skills = array -> Split into array
    if (typeof req.body.skills !== 'undefined') {
        profileFields.skills = req.body.skills.split(',');
    }

    // Social = Object of fields
    profileFields.social = {};
    if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
    if (req.body.linkedIn) profileFields.social.linkedIn = req.body.linkedIn;
    if (req.body.instagram) profileFields.social.instagram = req.body.instagram;

    Profile.findOne({ user: req.user.id }).then(profile => {
        if(profile) {
            // update
            Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true }
            ).then(profile => res.json(profile));
        } else {
            // Create

            // Check if handle exists
            Profile.findOne({ handle: profileFields.handle }).then(profile => {
                if(profile) {
                    errors.handle = 'That handle already exists';
                    res.status(400).json(errors);
                }

                // Save profile
                new Profile(profileFields).save().then(profile => res.json(profile));
            })
        }
    })
});

//////////////
// Exports //
////////////

module.exports = router;
