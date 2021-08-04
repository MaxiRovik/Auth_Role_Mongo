const Router = require('express');
const router = new Router();
const controller = require('./authController');
const {check} = require("express-validator");

router.post('/registration', [
    check('username', ' username can not be empty').notEmpty(),
    check('password', ' password must to be from 4 to 20 symbols').isLength({min:4, max:20})
    ], controller.registration);
router.post('/login',controller.login);
router.get('/users',controller.getUsers);

module.exports = router;

