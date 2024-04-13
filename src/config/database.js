const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.MONGO_URL;
mongoose.connect(url, {
  useNewUrlParser: true,

  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;
module.exports = mongoose;
