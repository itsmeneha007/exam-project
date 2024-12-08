const express = require('express');
const router = express.Router();
const { createAuthor, getAuthors } = require('../controllers/authorController');

router.post('/authors', createAuthor);
router.get('/authors', getAuthors);

module.exports = router;