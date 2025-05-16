const express = require('express');
const mongoose = require('mongoose');
const loanRoutes = require('./routes/loanRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());

const mongouri = process.env.MONGO_URI;
// Connect to MongoDB
mongoose.connect(mongouri ,  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/loans', loanRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
