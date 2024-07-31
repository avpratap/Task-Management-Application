const pool = require('pg');
const bcrypt = require("bcryptjs");
const { createUser, getUserByEmail } = require('../models/User');

const generateToken = require('../utils/generateToken');

const register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("new registration for email, password:", email, password);

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("new registration for email, hashedpassword:", email, hashedPassword);

  const user = await createUser(name, email, hashedPassword);
  res.status(201).json({ message: 'User registered successfully' });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  
  const user = await getUserByEmail(email);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

  const token = generateToken(user.id);
  res.status(200).json({ token });
};

const testController = async (req, res) => {
  const { name, email, password } = req.body;
  // const pool = new pool(  );
  console.log("new registration for email, password:", email, password);
  // const { Pool } = require('pg')
  // require('dotenv').config()
  
  const pool = new Pool({
    connectionString: "postgres://default:lxwLT5i6XVbK@ep-falling-meadow-a4opj67j-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require?sslmode=require",
  })

const result = await pool.query(
    'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
    [name, email, password]
  );

  res.status(201).json({ message: 'User registered successfully' });
};

module.exports = {
  register,
  login,
  testController
};
