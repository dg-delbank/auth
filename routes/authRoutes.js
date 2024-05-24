const express = require('express');
const router = express.Router();
const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    res.status(200).send('Work!');
});

router.post('/login', async (req, res) => {
    res.status(200).send('Work!');
});

router.get('/profile', async (req, res) => {
    res.status(200).send('Work!');
});

module.exports = router;
