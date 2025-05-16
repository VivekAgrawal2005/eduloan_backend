const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');

// Filter loans
router.post('/filter', loanController.filterLoans);

// Compare loans
router.post('/compare', loanController.compareLoans);

// Get loan details
router.get('/:id', loanController.getLoanDetails);

module.exports = router;
