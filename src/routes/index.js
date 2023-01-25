const express = require("express");
const router = express.Router();
const Link = require("../models/link");

router.get("/", async (req, res) => {
  const result = await Link.find().sort({ data: -1 }).limit(5);

  res.render("main", { links: result || [] });
});

module.exports = router;
