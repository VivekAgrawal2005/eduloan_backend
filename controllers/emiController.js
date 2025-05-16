// Calculate EMI, total interest, total payment
exports.calculateEMI = (req, res) => {
  try {
    const { loanAmount, interestRate, repaymentYears } = req.body;

    if (
      !loanAmount ||
      !interestRate ||
      !repaymentYears ||
      loanAmount <= 0 ||
      interestRate < 0 ||
      repaymentYears <= 0
    ) {
      return res.status(400).json({ message: 'Invalid input values' });
    }

    const P = parseFloat(loanAmount);
    const R = parseFloat(interestRate) / 12 / 100;
    const N = parseFloat(repaymentYears) * 12;

    let EMI;

    if (R === 0) {
      EMI = P / N;
    } else {
      EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    }

    EMI = parseFloat(EMI.toFixed(2));
    const totalPayment = parseFloat((EMI * N).toFixed(2));
    const totalInterest = parseFloat((totalPayment - P).toFixed(2));

    res.json({
      monthlyEMI: EMI,
      totalInterest,
      totalPayment
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
