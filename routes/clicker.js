const express = require('express');
const router = express.Router();
const User = require('../models/Clicker');
const auth = require('../middleware/auth');

router.get('/game', auth, async (req, res) => {
    try {
        const user = await User.findById(req.session.userId);
        res.render('clicker', { user });
    } catch (err) {
        res.redirect('/login');
    }
});

router.post('/game/save', auth, async (req, res) => {
    const { points, clickValue, autoClickPerSecond } = req.body;
    try {
        await User.findByIdAndUpdate(req.session.userId, { 
            points, 
            clickValue, 
            autoClickPerSecond 
        });
        res.sendStatus(200);
    } catch (err) {
        res.status(500).send("Błąd zapisu");
    }
});

module.exports = router;
