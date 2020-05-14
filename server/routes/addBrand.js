"use strict";
let express = require("express");
let router = express.Router();
let {
    permittedBrand
} = require("../models");

router.post("", async (req, res) => {
    try {
        let {
            Brand,

        } = req.body;
        if (Brand) {
            const response = await permittedBrand.create({
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

module.exports = router;