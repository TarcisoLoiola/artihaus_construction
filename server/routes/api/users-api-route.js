const router = require('express').Router();
const UsersController = require('../../controllers/users-controller');

// Matches with '/api/jobs'
router.route('/create')
.post(UsersController.create)

router.route('/read')
.post(UsersController.read)

router.route('/readId')
.post(UsersController.readId)

// router.route('/read-false')
// .get(UsersController.read_false)

// router.route('/read/:_id')
// .get(UsersController.read_id)

router.route('/update')
.post(UsersController.update)

router.route('/delete')
.post(UsersController.delete)


module.exports = router;