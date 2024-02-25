const express = require('express');
const router = express.Router();
const noteController = require('../controller/note_controller');

router.post('/addNote',noteController.addNote);
router.get('/allNotes',noteController.getAll);
router.get('/userNotes',noteController.userNotes)

module.exports = router;