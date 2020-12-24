

const express = require('express');
const router = express.Router();


// @route       GET api/contacts
// @description Get all users contacts
// @access      Private
router.get('/', (req, res) => {
    res.send('Get all contacts');
});


// @route       POST api/contacts
// @description Add new user contact
// @access      Private
router.post('/', (req, res) => {
    res.send('Add a contact');
    
});


// @route       PUT api/contacts/:id
// @description Update a contact
// @access      Private
router.put('/:id', (req, res) => {
    res.send('Update a contact');
});

 

// @route       DELETE api/contacts/:id
// @description Delete a contact
// @access      Private
router.delete('/:id', (req,res) => {
    res.send('Delete contact');
});

module.exports = router;