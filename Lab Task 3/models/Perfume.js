const mongoose = require("mongoose");
let perfumeSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: Number,
  name: String,
  description: String,
  price: String,
  image: String,
  link: String,
});
let Perfume = mongoose.model("Perfume", perfumeSchema);
module.exports = Perfume;
