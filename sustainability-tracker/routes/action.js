const express = require('express');
const EcoAction = require('../models/EcoAction');
const { verifyToken } = require('../middleware/auth');

const router = express.Router();

// Log Action
router.post('/log', verifyToken, async (req, res) => {
    const { actionType, points } = req.body;
    const newAction = new EcoAction({ userId: req.userId, actionType, points });
    try {
        await newAction.save();
        res.status(201).send('Action logged');
    } catch (error) {
        res.status(500).send('Error logging action');
    }
});

// Get User Actions
router.get('/my-actions', verifyToken, async (req, res) => {
    try {
        const actions = await EcoAction.find({ userId: req.userId });
        res.json(actions);
    } catch (error) {
        res.status(500).send('Error fetching actions');
    }
});

module.exports = router;