const { Router } = require('express');
const router = Router();

const {
    getUsers,
    createUser,
    getUser,
} = require('../controllers/user.controller')

router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    .get(getUser)

module.exports = router;