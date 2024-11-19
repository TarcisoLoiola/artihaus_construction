const router = require('express').Router();
const ExpensesRoute = require('./expenses-api-route')
const EarningsRoute = require('./earnings-api-route')
const DetailsRoute = require('./details-api-route')
const ProjectsRoute = require('./projects-api-route')
const ClientsRoute = require('./clients-api-route')
const AssociatesRoute = require('./associates-api-route')
const TimeSheetRoute = require('./timesheet-api-route')
const UsersRoute =  require('./users-api-route')

// API Routes

router.use('/expenses', ExpensesRoute)

router.use('/earnings', EarningsRoute)

router.use('/details', DetailsRoute)

router.use('/projects', ProjectsRoute)

router.use('/clients', ClientsRoute)

router.use('/associates', AssociatesRoute)

router.use('/timesheet', TimeSheetRoute)

router.use('/users', UsersRoute)

module.exports = router;