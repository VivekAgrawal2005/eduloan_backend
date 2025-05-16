const loans = require('../data/loans.json');

exports.filterLoans = (req, res) => {
    const { amount, maxInterest, collateral } = req.body;
    const filtered = loans.filter(loan =>
        loan.amount >= amount &&
        loan.interest <= maxInterest &&
        loan.collateral.toLowerCase().includes(collateral.toLowerCase())
    );
    res.json(filtered);
};

exports.compareLoans = (req, res) => {
    const { ids } = req.body;
    const compared = loans.filter(loan => ids.includes(loan.id));
    res.json(compared);
};

exports.getLoanDetails = (req, res) => {
    const loan = loans.find(l => l.id === req.params.id);
    if (!loan) return res.status(404).json({ error: 'Loan not found' });
    res.json(loan);
};
