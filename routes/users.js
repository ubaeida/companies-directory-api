var express = require('express');
const { store } = require('../controllers/userController');
var router = express.Router();

router.post('/', store);

module.exports = router;