const { User, Thoughts } = require('../models');

module.exports = {
    // get all thoughts
    getThought(req, res) {
        Thoughts.find({})
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err))
    },
    // get all thoughts
    getSingleThought(req, res) {
        Thoughts.findOne({ _id: req.params.thoughtId })
            .select('__v')
            .then((thought) =>
                // if 'no thought' is true
                !thought
                    ? res.status(400).json({ message: 'no thought found with this id' })
                    // otherwise
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err))
    },
    // create thought
    createThought(req, res) {
        Thoughts.create(req.body)
            .then(({ _id }) => {
                // finds matching user and updates their document
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    // pushes new thought to thought array
                    { $push: { thoughts: _id } },
                    // updated thought is returned as a result
                    { new: true }
                )
            })
            .then((user) =>
                // if 'no thought' is true
                !user
                    ? res.status(404).json({ message: 'no user found with this id' })
                    // otherwise
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err))
    },
    // update thought
    updateThought(req, res) {
        Thoughts.updateOne(req.body)
            .then(({ _id }) => {
                // finds matching user and updates their document
                return Thoughts.updateOne(
                    { _id: req.body.userId },
                    // pushes new thought to thought array
                    { $push: { thoughts: _id } },
                    // updated thought is returned as a result
                    { new: true }
                )
            })
            .then((user) =>
                // if 'no thought' is true
                !user
                    ? res.status(404).json({ message: 'no user found with this id' })
                    // otherwise
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err))
    }
}
// delete thought
// create reaction 
// delete reaction