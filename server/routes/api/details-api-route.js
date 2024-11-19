const router = require('express').Router();
const DetailsController = require('../../controllers/details-controller');

// Matches with '/api/jobs'

router.route('/create')
.post(DetailsController.create)

router.route('/read')
.post(DetailsController.read)

router.route('/update')
.post(DetailsController.update)

router.route('/delete')
.post(DetailsController.delete)


module.exports = router;