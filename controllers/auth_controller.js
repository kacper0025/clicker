const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

async function postRegister(req, res) {
        const { username, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    await User.create({ username, password: hashed });
    res.redirect('/login');
}

async function postLogin(req, res) {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
        req.session.userId = user._id;
        res.redirect('/game');
    } else {
        res.send("Błędne dane");
    }
}

async function postLogout(req, res) {
    req.session.destroy();
    res.redirect('/login');
}

module.exports = {postRegister, postLogin, postLogout};