let express = require("express");
let router = express.Router();
let Perfume = require("../../models/Perfume");
router.get("/perfumes/:id", async (req, res) => {
  let perfume = await Perfume.findById(req.params.id);
  return res.render("Perfumedetails", { perfume });
});
// router.put("/api/perfumes/:id", async (req, res) => {
//   let perfume = await Perfume.findById(req.params.id);
//   perfume.title = req.body.title;
//   perfume.type = req.body.type;
//   perfume.genre = req.body.genre;
//   await perfume.save();
//   return res.send(perfume);
// });
//

// router.post("/api/perfumes", async (req, res) => {
//   let data = req.body;
//   let record = new Perfume(data);
//   await record.save();
//   return res.send(record);
// });
router.get("/perfumes", async function (req, res) {
  let perfumes = await Perfume.find();
  return res.render("Homepage", { perfumes });
});

module.exports = router;
