const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const authorRoutes = require('./routes/authorRoutes');
const bookRoutes = require('./routes/bookRoutes');
const borrowingRoutes = require('./routes/borrowingRoutes');
const app = express();

dotenv.config();
connectDB();

app.use(express.json());
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', authorRoutes);
app.use('/api', bookRoutes);
app.use('/api', borrowingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});