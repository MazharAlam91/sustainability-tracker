const mongoose = require('mongoose');

const ecoActionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    actionType: { type: String, required: true },
    date: { type: Date, default: Date.now },
    points: { type: Number, default: 0 }
});

const EcoAction = mongoose.model('EcoAction', ecoActionSchema);
module.exports = EcoAction;
