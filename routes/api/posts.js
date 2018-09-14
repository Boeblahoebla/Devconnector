//////////////
// Imports //
////////////

const express = require('express');
const router = express.Router();

///////////////////
// GET requests //
/////////////////

// @route   GET api/posts/test
// @desc    Tests posts route
// @access  Public

router.get('/test', (req, res) => {
    res.json({ message: "Posts works" });
});

//////////////
// Exports //
////////////

module.exports = router;
