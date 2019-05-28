const express = require('express');
const router = express.Router();

// @route   GET api/profiles
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Profiles Router'));

module.exports = router;
