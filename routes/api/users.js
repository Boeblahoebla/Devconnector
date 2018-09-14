//////////////
// Imports //
////////////

const express = require('express');
const router = express.Router();

///////////////////
// GET requests //
/////////////////

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public

router.get('/test', (req, res) => {
    res.json({ message: "Users works" });
});

//////////////
// Exports //
////////////

module.exports = router;
