const express = require('express');
const { connectDB, sequelize } = require('./db');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  await connectDB();
  await sequelize.sync(); // Cria as tabelas se elas não existirem
  app.listen(PORT, () => {
    console.log(`Auth service is running on port ${PORT}`);
  });
};

startServer();
