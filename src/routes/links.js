const express = require("express");
const router = express.Router();
const shortid = require("shortid");

const Link = require("../models/link");

router.post("/short", async (req, res) => {
  try {
    const { link } = req.body;

    const code = shortid.generate();
    let url = await Link.findOne({ source: link });

    if (url) {
      return res.json({ url });
    }
    const shortUrl = `http://localhost:3000/link/${code}`;
    url = new Link({
      code,
      source: link,
      short: shortUrl,
    });
    await url.save();
    res.json(url);
  } catch (error) {
    res.status(500).json({ status: 500, message: JSON.stringify(error) });
  }
});

router.get("/:code", async (req, res) => {
  const { code } = req.params;

  const link = await Link.findOne({ code });
  console.log(link);
  if (link) {
    return res.redirect(link.source);
  }
  res.status(404).json({ status: 404, message: "Link not found" });
});

module.exports = router;
