const { Schema, model } = require('mongoose');
const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date)=> date.toLocaleDateString()
        },
        username:{
           type: String,
           required: true,
        },
        reactions:[
            reactionSchema
        ]
            
        
    },
    {
        toJSON: {
          getters: true,
          virtuals: true,
        },
        id: false,
      }
)
thoughtsSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });
  const Thoughts = model('thoughts', thoughtsSchema);
module.exports = Thoughts;