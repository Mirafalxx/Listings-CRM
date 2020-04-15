const express = require("express");
const router = express.Router();
const {
    Listing
} = require("../models");


router.put('/:id', async (req, res) => {
    const id = req.params.id;

    Listing.update(req.body, {
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Listings was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Listing with id=${id}. Maybe Listing was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Listing with id=" + id
            });
        });
})

// router.get("/:id", async (req, res) => {
//     try {
//         // тут нет у тебя функции findById, и тут в принципе не нужны опшены внутри
//         const ListingByID = await Listing.findByPk(parseInt(req.params.id));
//         res.send(ListingByID);
//     } catch (err) {
//         res.status(500).json({
//             error: "An error occurred while trying to get listings"
//         });
//         console.log(err);
//     }
// });

module.exports = router;