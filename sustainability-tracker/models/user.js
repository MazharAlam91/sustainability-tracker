const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    ecoActions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'EcoAction' }]
});

const User = mongoose.model('User', userSchema);
module.exports = User;