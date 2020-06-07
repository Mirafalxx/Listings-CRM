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

module.exports = router;