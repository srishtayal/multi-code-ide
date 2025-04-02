var express = require('express');
const { signUp, login } = require('../controllers/userController');
var router = express.Router();

router.post("/signUp", signUp);  

module.exports = router;
