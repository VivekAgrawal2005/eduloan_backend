exports.calculateEMI = (req, res) => {
    const { amount, interest, duration } = req.body;

    const P = parseFloat(amount);
    const R = parseFloat(interest) / 12 / 100;
    const N = parseFloat(duration) * 12;

    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const totalPayment = emi * N;
    const totalInterest = totalPayment - P;

    res.json({
        monthlyEMI: emi.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
        totalPayment: totalPayment.toFixed(2)
    });
};
