"use strict";
var express = require("express");
var router = express.Router();
var {
    PartnersListing
} = require("../models");

router.post("/", async (req, res) => {
    // console.log("Add new listing", req.body);
    try {
        let {
            ProductASIN,
            ProductName,
            Partner
        } = req.body;
        if (ProductASIN && ProductName && Partner) {
            const response = await PartnersListing.create({
                ProductASIN,
                ProductName,
                Partner
            });

            if (response) res.status(200).send({
                message: `Successfully added: ${JSON.stringify(response)}`,
                // message: res.status
            });
        } else {
            res.status(400).send({
                error: "Not enough data to add new lesting"
            });
        }

    } catch (error) {
        console.error("error:", error);
        res.status(500).send({
            error: "An error occurred while trying to add new listing"
        });
    }
});

module.exports = router;