const Loan = require('../Models/loanmodel');

// Add new loan
exports.addLoan = async (req, res) => {
  try {
    const loan = new Loan(req.body);
    await loan.save();
    res.status(201).json({ message: 'Loan added successfully', loan });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Filter loans based on user criteria
exports.filterLoans = async (req, res) => {
  try {
    const { amount, max_interest, collateral } = req.query;
    const filter = {};

    // Apply filters
    if (amount) {
      filter.loan_amount_min = { $lte: Number(amount) };
      filter.loan_amount_max = { $gte: Number(amount) };
    }
    if (max_interest) {
      filter.interest_rate = { $lte: Number(max_interest) };
    }
    if (collateral && (collateral === 'Yes' || collateral === 'No')) {
      filter.collateral_required = collateral;
    }

    const loans = await Loan.find(filter);

    // Remove duplicates by loan_name
    const uniqueLoansMap = new Map();
    loans.forEach((loan) => {
      if (!uniqueLoansMap.has(loan.loan_name)) {
        uniqueLoansMap.set(loan.loan_name, {
          name: loan.bank_name,
          loan_name: loan.loan_name,
          interest_rate: loan.interest_rate,
          id: loan._id,
        });
      }
    });

    const response = Array.from(uniqueLoansMap.values());
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get loan by ID (for details or comparison)
exports.getLoanById = async (req, res) => {
  try {
    const loan = await Loan.findById(req.params.id);
    if (!loan) return res.status(404).json({ message: 'Loan not found' });
    res.json(loan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
