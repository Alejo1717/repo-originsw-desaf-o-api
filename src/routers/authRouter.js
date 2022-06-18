const { Router } = require('express');
const router = Router();

const {
    login,    
} = require('../controllers/authController')


router.route('/')
    .post(login)


module.exports = router;