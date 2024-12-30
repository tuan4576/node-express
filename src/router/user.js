const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController')

router.post('/register', userController.register)
router.post('/login', userController.index)

module.exports = router;