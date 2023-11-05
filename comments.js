// Create web server using express
const express = require('express');
const router = express.Router();
// Import the comments controller
const commentsCtrl = require('../controllers/comments');
// Import the auth middleware
const auth = require('../middleware/auth');
// Import the multer middleware
const multer = require('../middleware/multer-config');

// Create the routes and associate the functions from the controller
// Comments routes
router.post('/:id/comments', auth, multer, commentsCtrl.createComment);
router.get('/:id/comments', auth, commentsCtrl.getAllComments);
router.put('/:id/comments/:idComment', auth, multer, commentsCtrl.modifyComment);
router.delete('/:id/comments/:idComment', auth, commentsCtrl.deleteComment);

module.exports = router;

