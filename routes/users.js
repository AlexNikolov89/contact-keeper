const express = require('express');
const router = express.Router();

// Post, api/uers, Register user, public
router.post('/', (req, res) => {
    res.send('Register user')
})

module.exports = router;