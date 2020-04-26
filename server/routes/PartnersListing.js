"use strict";
const express = require("express");
const router = express.Router();
const {
    gluedListing
} = require("../models");

// request-запроc response -ответ
router.post("/", async (req, res) => {
    console.log("Add new listing", req.body);
    try {
        let {
            OriginalAsin,
            OriginalName,
            NewAsin,
            NewName
        } = req.body;
        if (OriginalAsin && OriginalName && NewAsin && NewName) {
            const response = await gluedListing.create({
                OriginalAsin,
                OriginalName,
                NewAsin,
                NewName
            });

            if (response) res.status(200).send({
                message: `Successfully added: ${JSON.stringify(response)}`
            });
        } else {
            res.status(400).send({
                error: "Not enough data to add new listing"
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