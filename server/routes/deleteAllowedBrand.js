const express = require("express");
const router = express.Router();
const {
    permittedBrand
} = require("../models");


router.delete("/:id", async (req, res) => {
    const id = req.params.id;

    await permittedBrand.destroy({
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Allowed brand  was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Glued Listing with id=${id}. Maybe Listing was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Listing with id=" + id
            });
        });
});






module.exports = router;