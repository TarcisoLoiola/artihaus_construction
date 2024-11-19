const router = require('express').Router();
const ProjectsController = require('../../controllers/projects-controller');

// Matches with '/api/jobs'
router.route('/create')
.post(ProjectsController.create)

router.route('/read')
.get(ProjectsController.read)

// router.route('/read-latest')
// .get(ProjectsController.read_latest)

// router.route('/read-false')
// .get(ProjectsController.read_false)

// router.route('/read/:_id')
// .get(ProjectsController.read_id)

router.route('/update')
.post(ProjectsController.update)

router.route('/delete')
.post(ProjectsController.delete)


module.exports = router;