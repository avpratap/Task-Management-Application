const express = require('express');
const { register, login, testController } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/testcontroller', testController);

module.exports = router;
