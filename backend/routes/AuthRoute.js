const express = require('express');
const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const router = express.Router();

// Signup
router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.json({ message: 'All fields required' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });
        await newUser.save();
        res.json({ message: 'Signup successful' });
    } catch (error) {
        res.status(500).json({ message: 'Signup failed', error });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ message: 'All fields required' });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ message: 'User does not exist' });
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.json({ message: 'Invalid password' });
        }
        req.session.userId = user._id;
        req.session.role = user.role;
        res.json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: 'Login failed', error });
    }
});

// Logout
router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send('Error logging out');
        }
        res.clearCookie('connect.sid'); // clears the session cookie
        res.send('Logged out successfully');
    });
});

// Check Authentication
router.get('/checkAuth', (req, res) => {
    try {
        if (req.session.userId) {
            return res.json({isAuthenticated: true});
        } else {
            return res.json({isAuthenticated: false});
        }
    } catch (error) {
        res.status(500).json({ message: 'Error checking authentication' });
    }
});

module.exports = router;
