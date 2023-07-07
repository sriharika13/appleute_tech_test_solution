const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

exports.register= async (req, res) => {
  try {
    req.body={username:"Sriharika", password:"dfdsSDG"}
    const { username, password } = req.body;
    const existingUser = User.getUserByUsername(username);

    if (existingUser) {
      return res.json({ status: 'error', error: 'Duplicate username' });
    }

    const newPassword = await bcrypt.hash(password, 10);
    User.createUser(username, newPassword);

    res.json({ status: 'ok' });
  } catch (err) {
    console.error(err);
    res.json({ status: 'error', error: 'Registration failed' });
  }
}

exports.login= async (req, res) => {
    req.body={username:"Sriharika", password:"dfdsSDG"}
  const { username, password } = req.body;
  const user = User.getUserByUsername(username);

  if (!user) {
    return res.json({ status: 'error', error: 'Invalid login' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        username: user.username,
      },  
      'secret123',{expiresIn: '1d'}
    );

    const responseJson = { status: 'ok', user: token, username: user.username }
    res.json(responseJson);
  } else {
    return res.json({ status: 'error', user: false });
  }
}


