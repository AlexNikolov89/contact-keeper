const express = require('express');
const router = express.Router();

// Get, api/contacts, Get users contacts user, Private
router.get('/', (req, res) => {
    res.send('Get all contacs')
})


// Post, api/contacts, Add new contact, Private
router.post('/', (req, res) => {
    res.send('Add contact')
})


// Put, api/contacts/:id, Update contact, Private
router.put('/:id', (req, res) => {
    res.send('Update contact')
})


// Delete, api/contacts/:id, Delete contact, Private
router.post('/:id', (req, res) => {
    res.send('Delete contact')
})



module.exports = router;