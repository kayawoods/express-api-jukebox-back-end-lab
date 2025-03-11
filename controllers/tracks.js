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


// READ - GET - /pets
router.get('/', async (req, res) => {
    try {
        const foundTracks = await Track.find();
        res.status(200).json(foundTracks); 
      } catch (err) {
        res.status(500).json({ err: err.message });
      }
  });


module.exports = router;