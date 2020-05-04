const express = require("express");
const router = express.Router();
const {
    Listing
} = require("../models");

// router.get("/", async (req, res) => {
//   try {
//     const Listings = await Listing.findAll();
//     res.send(Listings);

//   } catch (err) {
//     res.status(500).json({
//       error: "An error occurred while trying to get  listings"
//     });
//   }
// });

router.delete("/:id", async (req, res) => {
    const id = req.params.id;

    await Listing.destroy({
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Listing was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Listing with id=${id}. Maybe Listing was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
});




// router.delete("/:id", async (req, res) => {
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