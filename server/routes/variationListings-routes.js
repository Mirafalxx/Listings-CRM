"use strict";
const express = require("express");
const router = express.Router();
const {
    gluedListing
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


router.get("/all", async (req, res) => {
    try {
        const gluedListings = await gluedListing.findAll();
        res.send(gluedListings);

    } catch (err) {
        res.status(500).json({
            error: "An error occurred while trying to get  listings"
        });
    }
});


router.get("/all/:id", async (req, res) => {
    try {

        const variationsID = await gluedListing.findByPk(parseInt(req.params.id));
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

    await gluedListing.destroy({
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Partners listing was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Listing with id=${id}. Maybe Listing was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
});

module.exports = router;