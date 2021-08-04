const Router = require('express');
const router = new Router();
const controller = require('./authController');
const {check} = require("express-validator");
const authMiddleWare = require('./middleware/authMiddleWare');
const roleMiddleware = require ('./middleware/roleMiddleWare');


router.post('/registration', [
    check('username', ' username can not be empty').notEmpty(),
    check('password', ' password must to be from 4 to 20 symbols').isLength({min:4, max:20})
    ], controller.registration);
router.post('/login',controller.login);
router.get('/users', authMiddleWare,/* or roleMiddleware([ADMIN or USER])*/  controller.getUsers);

module.exports = router;

