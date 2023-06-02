const { User, Thoughts } = require('../models');

const userController = {
    getUser(req, res) {
        User.find({})
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err))
    },
    // getsingleuser and create
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('__v')
            .then((user) =>
                // if 'no user' is true
                !user
                    ? res.status(400).json({ message: 'no user found with this id' })
                    // otherwise
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err))
    },
    // create a new user
    createUser(req, res) {
        console.log(req.body)
        const newUser = User.create(req.body)
            .then(
                res.json('new user'))
            .catch((err) => res.status(500).json(err))
    }

}
module.exports=userController;