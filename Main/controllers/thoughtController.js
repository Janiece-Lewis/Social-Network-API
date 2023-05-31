const {User, Thoughts} = require('../models');

module.exports= {
    getThought(req,res){
        Thoughts.find({})
            .then((thought)=>res.json(thought)) 
    },

    getSingleThought(req,res){
        Thoughts.findOne({_id:req.params.thoughtId})
            .select('__v')
            .then((thought)=>
            !thought
                ? res.status(400).json({message:'no thought found with this id'})
                : res.json(thought)
            )
            .catch((err)=>res.status(500).json(err))
    },
    createThought(req,res){
        Thoughts.create(req.body)
            .then(({_id})=>{
                return User.findOneAndUpdate(
                    {_id:req.body.userId},
                    {$push: {thoughts:_id}},
                    {new:true}
                )
            })
            .then((thought)=>
            !thought
                ? res.status(404).json({message:'no user found with this id'})
                : res.json(thought)
            )
            .catch((err)=>res.status(500).json(err))
    }
}
// update thought and delete thought
// create reaction and delete reaction