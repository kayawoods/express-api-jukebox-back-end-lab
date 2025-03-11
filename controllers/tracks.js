const Track = require('../models/track.js');
const express = require('express');
const router = express.Router();


// CREATE - POST - /tracks
router.post('/', async (req, res) => {
    try {
        const createdTrack = await Track.create(req.body);
        res.status(201).json(createdTrack);
    } catch (err) {
    }
});


module.exports = router;