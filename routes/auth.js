const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const controller = require('../controllers/auth_controller');

router.get('/login', (req, res) => res.render('login'));
router.get('/register', (req, res) => res.render('register'));

router.post('/register', controller.postRegister)

router.post('/login', controller.postLogin)

router.get('/logout', controller.postLogout)
module.exports = router;