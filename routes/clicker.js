const express = require('express');
const router = express.Router();
const User = require('../models/User');
const auth = require('../middleware/auth');
const controller = require('../controllers/user_controller')

router.get('/game', auth, controller.getGame )

router.post('/game/save', auth, controller.postSave )

module.exports = router;