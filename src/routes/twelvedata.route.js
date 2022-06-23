const { Router } = require('express');
const router = Router();

const {
    getAccionData,
    getAutocomplete,
    getQuotation
} = require('../controllers/twelvedata.controller')


router.route('/action-data')
    .post(getAccionData)

router.route('/autocomplete')
    .get(getAutocomplete)

router.route('/quotation')
    .post(getQuotation)

module.exports = router;