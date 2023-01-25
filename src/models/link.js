const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
  code: String,
  source: String,
  short: String,
  date: { type: String, default: new Date() },
});

module.exports = mongoose.model("link", linkSchema);
