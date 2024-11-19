const router = require('express').Router();
const ExpensesController = require('../../controllers/expenses-controller');

// Matches with '/api/jobs'
// router.route('/create-pdf')
// .post(ExpensesController.createPDF)

// router.route('/fetch-pdf')
// .get(ExpensesController.fetchPDF)

router.route('/create')
.post(ExpensesController.create)

router.route('/read')
.post(ExpensesController.read)

// router.route('/read/:category')
// .get(ExpensesController.read_category)

router.route('/update')
.post(ExpensesController.update)

router.route('/delete')
.post(ExpensesController.delete)


module.exports = router;