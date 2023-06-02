const router = require('express').Router();
const apiRoutes = require('./api');
// all API routes start with '/api'
router.use('/api', apiRoutes);
// if it's not an API route, it's a wrong route
router.use((req, res) => res.send('Wrong route!'));

module.exports = router;