const express = require('express');
const router = express.Router();
const emiController = require('../controllers/emiController');
const predictController = require('../controllers/predictController');

// EMI Calculator
router.post('/emi', emiController.calculateEMI);

// Loan Approval Predictor
router.post('/predict', predictController.predictApproval);

module.exports = router;
