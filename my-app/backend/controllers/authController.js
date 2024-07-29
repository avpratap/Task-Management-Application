const bcrypt = require('bcrypt');
const { createUser, getUserByEmail } = require('../models/User');
const generateToken = require('../utils/generateToken');

const register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("new registration for name:", name, "password", password);

  const hashedPassword = await bcrypt.hash(password, 10);
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

module.exports = {
  register,
  login,
};
