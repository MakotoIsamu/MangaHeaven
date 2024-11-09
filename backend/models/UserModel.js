const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, lowercase: true, trim: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    profilePicture: { type: String },
    address: { type: [String] },  // assuming an array of strings for address
    phoneNumber: { type: String },
    role: { type: String, enum: ['user', 'admin'], default: 'user' } // example with predefined roles
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
