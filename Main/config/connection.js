const { connect, connection } = require('mongoose');

const connectionString = 
    process.env.MONGODB_URI||'mongodb://localhost:27017/socialnetworkapi';
connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
// mongodb://localhost:27017