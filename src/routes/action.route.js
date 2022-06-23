const { Router } = require('express');
const router = Router();

const {
    createAction,
    getUserAction,    
    createUserAction,
    deleteUserAction,
} = require('../controllers/action.controller')

router.route('/')
    .post(createAction)

router.route('/user-action/:id')
    .get(getUserAction)

router.route('/user-action/create')
    .post(createUserAction)

router.route('/user-action/delete')
    .post(deleteUserAction)

module.exports = router;