//////////////
// Imports //
////////////

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Model
const Post = require('../../models/Post');

// Security
const passport = require('passport');

// Validation
const validatePostInput = require('../../validation/post');

///////////////////
// GET requests //
/////////////////

// @route   GET api/posts/test
// @desc    Tests posts route
// @access  Public
router.get('/test', (req, res) => {
    res.json({ msg: "Posts works" });
});


// @route   POST api/posts/
// @desc    Create a post
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    // Check validation
    if (!isValid) {
        // If any errors, send 400 with errors objects
        return res.status(400).json(errors);
    }

    const newPost = new Post({
       text: req.body.text,
       name: req.body.name,
       avatar: req.body.avatar, // The avatar is coming from the State of the react component
       user: req.user.id
   });

    newPost.save().then((post) => res.json(post));
});

//////////////
// Exports //
////////////

module.exports = router;
