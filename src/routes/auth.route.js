const { Router } = require('express');
const router = Router();

const {
    login,    
} = require('../controllers/auth.controller')


router.route('/login')
    .post(login)


module.exports = router;