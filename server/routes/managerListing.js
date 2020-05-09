"use strict";
const express = require("express");
const router = express.Router();
const {
    managerListing
} = require("../models");

// request-запроc response -ответ
router.post("/", async (req, res) => {
    console.log("Add new manager Listings", req.body);
    try {
        let {
            OriginalAsin,
            OriginalName,
            NewAsin,
            NewName,
            Problem
        } = req.body;
        if (OriginalAsin && OriginalName && NewAsin && NewName && Problem) {
            const response = await managerListing.create({
                OriginalAsin,
                OriginalName,
                NewAsin,
                NewName,
                Problem
            });

            if (response) res.status(200).send({
                message: `Successfully added: ${JSON.stringify(response)}`
            });
        } else {
            res.status(400).send({
                error: "Not enough data to add new manager listing"
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