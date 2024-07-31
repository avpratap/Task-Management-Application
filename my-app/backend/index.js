const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const pool = require('./config/db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// const PORT = process.env.PORT || 5000;

app.get("/health", (req,res) => {
  res.send("backend is running")
});

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// Ensure the database connection is established
pool.connect()
  .then(client => {
    console.log('Database connected successfully');
    client.release();
  })
  .catch(err => console.error('Database connection error', err.stack));
