const express = require('express');
const router = express.Router();
const Tutor = require('../../models/Tutor.model');
const tutorsArray = require('../../bin/seeds');

// ****************************************************************************************
// GET route to seed the tutors
// ****************************************************************************************
router.get('/seed-my-db', async (req, res, next) => {
  try {
    await tutorsArray.forEach((tutor) => {
      Tutor.create(tutor);
    });
    res.status(201).json({ success: true, message: 'DB has been seeded' });
  } catch (err) {
    res.json(
      { success: false, message: 'Error while trying to seed the database' },
      err
    );
  }
});
