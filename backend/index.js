require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cors = require('cors');
const AuthRoutes = require('./routes/AuthRoute');
const app = express();

// Middleware
app.use(cors({
    origin: 'https://manga-heaven-frontend.vercel.app/',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(session({
    secret: process.env.SESSION_SECRET, // use env variable for production
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI, // use env variable here too
        ttl: 24 * 60 * 60 // session expires in 1 day
    }),
    cookie: {
        maxAge: 24 * 60 * 60 * 1000, // cookie expires in 1 day
        secure: false, // set to true if using https
        httpOnly: true,
        sameSite: 'lax'
    }
}));

// Database connection with error handling
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.get('/', (req, res) => {
    res.send('API is running');
});
app.use('/auth', AuthRoutes);

// Start the server
app.listen(5000, () => {
    console.log('Server is running on PORT: 5000');
});
