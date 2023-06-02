const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtsRoutes = require('./thoughtRoutes');
// midway point of url and end point file
router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes);

module.exports = router;