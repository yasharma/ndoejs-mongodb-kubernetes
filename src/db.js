const MongoClient = require('mongodb').MongoClient;
let mongoDB;

const setupDB = callback => {
  MongoClient.connect(
    process.env.MONGO_DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, _) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, 'DB connection successful!');
      }
    }
  );
};

const getDB = () => {
  return mongoDB;
};

module.exports = { setupDB, getDB };