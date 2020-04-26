const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');

const Review = require('../models/Review');

// @route     GET api/reviews
// @desc      Get all reviews
// @access    Public
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find().sort({
      date: -1,
    });
    res.json(reviews);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/reviews
// @desc      Add new review
// @access    Public
router.post(
  '/',
  [
    [
      check('username', 'Name is required')
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }

    const {username, comment, rating} = req.body;

    try {
      const newReview = new Review({
        username,
        comment,
        rating
      });

      const review = await newReview.save();

      res.json(review);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },
);

module.exports = router;