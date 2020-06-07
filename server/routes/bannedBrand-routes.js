"use strict";
let express = require("express");
let router = express.Router();
let {
    bannedBrand
} = require("../models");



router.get("/all", async (req, res) => {
    try {
        const bannedBrands = await bannedBrand.findAll();
        res.send(bannedBrands);

    } catch (err) {
        res.status(500).json({
            error: "An error occurred while trying to get  listings"
        });
    }
});



router.post("", async (req, res) => {
    try {
        let {
            Brand,
            Status,
        } = req.body;
        if (Brand && Status) {
            const response = await bannedBrand.create({
                Brand,
                Status
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

module.exports = router;