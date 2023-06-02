const router = require('express').Router();
const {createUser,} = require('../../controllers/userController');
console.log('user routes')
router.route('/').post(createUser);


// gives server access to routes 

module.exports= router;