const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const { secretKey } = require('../config');
const User = mongoose.model('User');

const router = express.Router();

router.use(bodyParser.json());

// Sign up
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  console.debug(username + " " + password)
  try {
    const user = new User({ username, password });
    await user.save();
    const token = jwt.sign({ userId: user._id }, secretKey);
    res.send({ token });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log(username + "username" + password + "password")
  if (!username || !password) {
    return res.status(422).send({ error: 'Must provide username and password' });
  }
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(422).send({ error: 'Invalid username or password' });
  }
  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, secretKey);
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: 'Invalid username or password' });
  }
});

router.post('/is_authenticated', async (req, res) => {

        const token = req.headers['authorization'];
      
        if (!token) {
          return res.status(401).json({ message: 'No token provided' });
        }
      
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
          if (err) {
            return res.status(401).json({ message: 'Invalid token' });
          }
      
          req.userId = decoded.id;
          next();
        });
});

module.exports = router;