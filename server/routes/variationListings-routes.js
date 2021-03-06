"use strict";
const express = require("express");
const router = express.Router();
const {
    variationListing
} = require("../models");

// request-запроc response -ответ
router.post("/new", async (req, res) => {
    console.log("Add new listing", req.body);
    try {
        let {
            OriginalAsin,
            OriginalName,
            NewAsin,
            NewName
        } = req.body;
        if (OriginalAsin && OriginalName && NewAsin && NewName) {
            const response = await variationListing.create({
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


router.get("/all", async (req, res) => {
    try {
        const variationListings = await variationListing.findAll();
        res.send(variationListings);

    } catch (err) {
        res.status(500).json({
            error: "An error occurred while trying to get  listings"
        });
    }
});


router.get("/all/:id", async (req, res) => {
    try {

        const variationsID = await variationListing.findByPk(parseInt(req.params.id));
        res.send(variationsID);
    } catch (err) {
        res.status(500).json({
            error: "An error occurred while trying to get list of  songs by id"
        });
        console.log(err);
    }
});


router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;

    await variationListing.destroy({
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Glued Listing was deleted successfully!"
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