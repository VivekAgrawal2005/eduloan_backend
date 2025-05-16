exports.predictApproval = (req, res) => {
    const { creditScore, income, amount, duration } = req.body;

    // Dummy logic — Replace with actual ML model
    let approvalChance = 0.7;
    if (creditScore > 750 && income > amount * 0.5) {
        approvalChance = 0.95;
    } else if (creditScore < 600) {
        approvalChance = 0.3;
    }

    res.json({ approvalProbability: approvalChance });
};
