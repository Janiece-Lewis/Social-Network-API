const router = require('express').Router();
const {createUser,getSingleUser} = require('../../controllers/userController');
console.log('user routes')
// create user
router.route('/').post(createUser);
// get single user
router.route('/:userId').get(getSingleUser);



//  server access to routes 
module.exports= router;