const pool = require('../config/db');

const createUser = async (name, email, password) => {
  console.log("creating a new user with email: ", email)
  const result = await pool.query(
    'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
    [name, email, password]
  );
  console.log("sucessfully created new user with email: ", email)
  return result.rows[0];
};

const getUserByEmail = async (email) => {
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  return result.rows[0];
};

module.exports = {
  createUser,
  getUserByEmail,
};
