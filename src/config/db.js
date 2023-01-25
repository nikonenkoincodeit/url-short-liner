const mongoose = require("mongoose");
const link =
  "mongodb+srv://Yuriy:Incode-it2015@cluster0.uxyog.mongodb.net/?retryWrites=true&w=majority";

const connectDb = () => {
  return mongoose.connect(link, { useNewUrlParser: true });
};

module.exports = connectDb;
