const router = require('express').Router();
const EarningsController = require('../../controllers/earnings-controller');

// Matches with '/api/jobs'
// router.route('/create-pdf')
// .post(EarningsController.createPDF)

// router.route('/fetch-pdf')
// .get(EarningsController.fetchPDF)

router.route('/create')
.post(EarningsController.create)

router.route('/read')
.post(EarningsController.read)

// router.route('/read/:category')
// .get(EarningsController.read_category)

router.route('/update')
.post(EarningsController.update)

router.route('/delete')
.post(EarningsController.delete)


module.exports = router;