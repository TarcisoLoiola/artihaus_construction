const router = require('express').Router();
const AssociatesController = require('../../controllers/associates-controller');

// Matches with '/api/jobs'
router.route('/create')
.post(AssociatesController.create)

router.route('/read')
.get(AssociatesController.read)

// router.route('/read-latest')
// .get(AssociatesController.read_latest)

// router.route('/read-false')
// .get(AssociatesController.read_false)

// router.route('/read/:_id')
// .get(AssociatesController.read_id)

router.route('/update')
.post(AssociatesController.update)

router.route('/delete')
.post(AssociatesController.delete)


module.exports = router;