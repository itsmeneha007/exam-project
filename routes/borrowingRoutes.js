const express = require('express');
const router = express.Router();
const { borrowBook } = require('../controllers/borrowingController');
const { authenticate } = require('../middlewares/authMiddleware');

router.post('/borrow', authenticate, borrowBook);

module.exports = router;