"use strict";
let express = require("express");
let router = express.Router();
let {
    stats
} = require("../models");


router.post("/new", async (req, res) => {
    // console.log("Add new listing", req.body);
    try {
        let {
            name,
            count,
            department

        } = req.body;
        if (name && count && department) {
            const response = await stats.create({
                name,
                count,
                department
            });

            if (response) res.status(200).send({
                message: `Successfully added: ${JSON.stringify(response)}`
            });
        } else {
            res.status(400).send({
                error: "Not enough data to add  statistic"
            });
        }

    } catch (error) {
        console.error("error:", error);
        res.status(500).send({
            error: "An error occurred while trying to add statistic"
        });
    }
});


router.get("/all", async (req, res) => {
    try {
        const stat = await stats.findAll();
        res.send(stat);

    } catch (err) {
        res.status(500).json({
            error: "An error occurred while trying to get  listings"
        });
    }
});

module.exports = router;