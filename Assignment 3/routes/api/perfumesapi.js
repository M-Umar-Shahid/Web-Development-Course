let express = require("express");
let router = express.Router();
let Perfume = require("../../models/Perfume");
router.get("/perfumes/:id", async (req, res) => {
  let perfume = await Perfume.findById(req.params.id);
  return res.send(perfume);
});
router.put("/perfumes/:id", async (req, res) => {
  let perfume = await Perfume.findById(req.params.id);
  perfume.name = req.body.name;
  perfume.brand = req.body.brand;
  perfume.price = req.body.price;
  await perfume.save();
  return res.send(perfume);
});
router.delete("/perfumes/:id", async (req, res) => {
  let perfume = await Perfume.findByIdAndDelete(req.params.id);
  return res.send(perfume);
});

router.post("/perfumes", async (req, res) => {
  let data = req.body;
  let record = new Perfume(data);
  await record.save();
  return res.send(record);
});
router.get("/perfumes", async function (req, res) {
  let perfumes = await Perfume.find();
  return res.send(perfumes);
  //   res.send([
  //     { name: "s21", brand: "Samsung", price: 50000 },
  //     { name: "iphone 15 pro max", brand: "Apple", price: 500000 },
  //   ]);
});

module.exports = router;
