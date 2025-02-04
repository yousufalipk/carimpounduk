const express = require('express');
const router = express.Router();

const {
    createUser,
    loginUser,
    logOutUser,
    refresh,
    JoinCommunity
} = require('../controller/authController');

// User routes

router.route('/register-user').post(createUser);

router.route('/login-user').post(loginUser);

router.route('/logout-user').post(logOutUser);

router.route('/refresh').post(refresh);

router.route('/join-community').post(JoinCommunity);

module.exports = router;