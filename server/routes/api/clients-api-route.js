const router = require('express').Router();
const ClientsController = require('../../controllers/clients-controller');

// Matches with '/api/jobs'
router.route('/create')
.post(ClientsController.create)

router.route('/read')
.post(ClientsController.read)

// router.route('/read-latest')
// .get(ClientsController.read_latest)

// router.route('/read-false')
// .get(ClientsController.read_false)

router.route('/read/:_id')
.get(ClientsController.read_id)

router.route('/update')
.post(ClientsController.update)

router.route('/delete')
.post(ClientsController.delete)


module.exports = router;