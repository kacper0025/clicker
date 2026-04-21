const express = require('express');
const User = require('../models/User');

async function postSave(req, res) {
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
}

async function getGame(req, res) {
      try {
            const user = await User.findById(req.session.userId);
            res.render('clicker', { user });
        } catch (err) {
            res.redirect('/login');
        }
}

module.exports = {postSave, getGame};