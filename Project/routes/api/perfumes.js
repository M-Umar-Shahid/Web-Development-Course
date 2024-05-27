let express = require("express");
const authenticateToken = require("../../middleware/authenticateToken");
let router = express.Router();
let Perfume = require("../../models/Perfume");
router.get("/perfumes/:id", authenticateToken, async (req, res) => {
  let perfume = await Perfume.findById(req.params.id);
  return res.render("Perfumedetails", { perfume });
});

router.get("/", authenticateToken, async function (req, res) {
  let perfumes = await Perfume.find();
  return res.render("Homepage", { perfumes });
});

module.exports = router;
