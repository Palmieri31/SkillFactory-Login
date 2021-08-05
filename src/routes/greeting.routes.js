const express = require('express');
const router = express.Router();

const greetingCtrl = require('../controllers/greeting.controller.js');
const {verifyToken} = require('../middlewares/verifyToken')

router.post('/',verifyToken, greetingCtrl.getGreeting);

module.exports = router;