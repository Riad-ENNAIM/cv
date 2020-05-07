const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');

const Review = require('../models/Review');

// @route     GET api/reviews
// @desc      Get all reviews
// @access    Public
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find().sort({ date: 1 });
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
      check('link', 'Not a valid URL')
        .isURL()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }

    const {username, comment, link, rating} = req.body;

    try {
      const newReview = new Review({
        username,
        comment,
        link,
        rating
      });

      const review = await newReview.save();

      res.json(review);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route     DELETE api/reviews/:id
// @desc      Delete review
// @access    Public
router.delete('/:id', async (req, res) => {
  try {
    let review = await Review.findById(req.params.id);

    if (!review) return res.status(404).json({ msg: 'Review not found' });

    await Review.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Review removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;