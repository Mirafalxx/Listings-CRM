"use strict";
let express = require("express");
let router = express.Router();
let {
    allowedBrand
} = require("../models");

router.post("/new", async (req, res) => {
    try {
        let {
            Brand,

        } = req.body;
        if (Brand) {
            const response = await allowedBrand.create({
                Brand
            });

            if (response) res.status(200).send({
                message: `Successfully added: ${JSON.stringify(response)}`
            });
        } else {
            res.status(400).send({
                error: "Not enough data to add  brand"
            });
        }

    } catch (error) {
        console.error("error:", error);
        res.status(500).send({
            error: "An error occurred while trying to add brand"
        });
    }
});



router.get("/all", async (req, res) => {
    try {
        const allowedBrands = await allowedBrand.findAll();
        res.send(allowedBrands);

    } catch (err) {
        res.status(500).json({
            error: "An error occurred while trying to get  listings"
        });
    }
});

router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;

    await allowedBrand.destroy({
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