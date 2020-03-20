const express = require("express");
const router = express.Router();
const {
  Listing
} = require("../models");

router.get("/", async (req, res) => {
  try {
    const Listings = await Listing.findAll();
    res.send(Listings);

  } catch (err) {
    res.status(500).json({
      error: "An error occurred while trying to get  listings"
    });
  }
});

// router.get("/:id", async (req, res) => {
//   try {
//     // тут нет у тебя функции findById, и тут в принципе не нужны опшены внутри
//     const AllSongsByID = await Songs.findByPk(parseInt(req.params.id));
//     res.send(AllSongsByID);
//   } catch (err) {
//     res.status(500).json({
//       error: "An error occurred while trying to get list of  songs by id"
//     });
//     console.log(err);
//   }
// });

module.exports = router;