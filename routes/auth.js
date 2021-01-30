const express = require('express');
const router = express.Router();

// Get, api/auth, login user, private
router.get('/', (req, res) => {
    res.send('Login user')
})


// Post, api/auth, auth user & get token user, public
router.post('/', (req, res) => {
    res.send('Login user')
})


module.exports = router;