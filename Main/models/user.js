const { Schema, model } = require('mongoose');
// user model 
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match:[/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,'must enter valid email']
    },
    thoughts:[
      {
        type:Schema.Types.ObjectId,
        ref:'Thoughts'
      }
    ],
    friends:[
      {
        type:Schema.Types.ObjectId,
        ref:'User'
      }
    ],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);
// schema settings to return 'friendCount'
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});
// turns schema into model for export
const User = model('User', userSchema);
module.exports = User;
