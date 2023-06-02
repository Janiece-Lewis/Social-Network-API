const { Schema, model,Types} = require('mongoose');

// reaction schema
const reactionSchema = new Schema(
    {
        reactionId:{
            type:Schema.Types.ObjectId,
            default:()=> new Types.ObjectId()
        },
        reactionBody:{
            type:String,
            required:true,
            maxlength:280
        },
        username:{
            type:String,
            required:true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => date.toLocaleDateString()
        },
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    },

)
// thoughts schema
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
            get: (date) => date.toLocaleDateString()
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [
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
// schema settings to return 'reactionCount'
thoughtsSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});
//   turns schema into model for export 
const Thoughts = model('Thoughts', thoughtsSchema);
module.exports = Thoughts;