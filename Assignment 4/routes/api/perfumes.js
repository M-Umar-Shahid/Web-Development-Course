const searchHistory = require("../../middleware/searchHistory");
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
router.get("/search-history", authenticateToken, async function (req, res) {
  let history = req.session.recent;
  return res.render("searchHistory", { history });
});
router.get("/search/:page", async (req, res) => {
  let page = Number(req.params.page) ? Number(req.params.page) : 1;
  let pageSize = 3;
  const query = req.query.q;
  const perfumes = await Perfume.find({
    name: { $regex: query, $options: "i" },
  })
    .skip(pageSize * (page - 1))
    .limit(pageSize);
  let total = await Perfume.countDocuments({
    name: { $regex: query, $options: "i" },
  });
  let totalPages = Math.ceil(total / pageSize);
  req.session.recent.push(query);
  return res.render("Search", {
    perfumes,
    total,
    page,
    pageSize,
    totalPages,
    query,
  });
});

// router.get("/games/:page?", async (req, res) => {});

module.exports = router;
