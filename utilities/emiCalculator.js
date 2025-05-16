function calculateEMI(P, annualRate, years) {
  const R = annualRate / 12 / 100;
  const N = years * 12;
  const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  const totalPayment = emi * N;
  const totalInterest = totalPayment - P;

  return {
    monthlyEMI: parseFloat(emi.toFixed(2)),
    totalInterest: parseFloat(totalInterest.toFixed(2)),
    totalAmountPayable: parseFloat(totalPayment.toFixed(2)),
  };
}

module.exports = calculateEMI;
