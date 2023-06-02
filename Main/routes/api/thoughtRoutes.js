const router = require('express').Router();
// destructured 'thought' object
const { getSingleThought,
        getThought,
        createThought } = require('../../controllers/thoughtController');

// this route is /api/thoughts/    for 'get' or 'post'
router.route('/').get(getThought).post(createThought);
// this route is /api/thoughts/:thoughtId  for 'get'
router.route('/:thoughtId').get(getSingleThought);














// gives server access to routes 
module.exports = router;