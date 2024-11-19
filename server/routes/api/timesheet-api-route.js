const router = require('express').Router();
const TimeSheetController = require('../../controllers/timesheet-controller');

// Matches with '/api/jobs'
router.route('/create')
.post(TimeSheetController.create)

router.route('/read')
.post(TimeSheetController.read)

// router.route('/read-latest')
// .get(TimeSheetController.read_latest)

// router.route('/read-false')
// .get(TimeSheetController.read_false)

router.route('/read/:_id')
.get(TimeSheetController.read_id)

router.route('/update')
.post(TimeSheetController.update)

router.route('/delete')
.post(TimeSheetController.delete)


module.exports = router;