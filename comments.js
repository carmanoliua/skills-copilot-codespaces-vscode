// Create web server
var express = require('express');
var router = express.Router();

// Import controller
var commentsController = require('../controllers/commentsController');

// Handle request
router.get('/', commentsController.getComments);
router.post('/', commentsController.postComment);
router.put('/:id', commentsController.putComment);
router.delete('/:id', commentsController.deleteComment);

// Export router
module.exports = router;