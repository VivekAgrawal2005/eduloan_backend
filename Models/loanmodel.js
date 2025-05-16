const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  bank_name: {
    type: String,
    required: true
  },
  loan_name: {
    type: String,
    required: true
  },
  loan_type: {
    type: String,
    required: true
  },
  interest_rate: {
    type: Number,
    required: true
  },
  eligibility: {
    type: String,
    required: true
  },
  loan_amount_min: {
    type: Number,
    required: true
  },
  loan_amount_max: {
    type: Number,
    required: true
  },
  collateral_required: {
    type: String,
    enum: ['Yes', 'No'],
    required: true
  },
  processing_fee: {
    type: String,
    required: true
  },
  moratorium_period: {
    type: Number,
    required: true
  },
  min_repayment_duration: {
    type: Number,
    required: true
  },
  max_repayment_duration: {
    type: Number,
    required: true
  },
  concessions: {
    type: String,
    default: 'None'
  },
  additional_notes: {
    type: String,
    default: ''
  }
}, { timestamps: true });

module.exports = mongoose.model('LoanAllDetails', loanSchema);