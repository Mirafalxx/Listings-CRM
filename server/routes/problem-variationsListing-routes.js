"use strict";
const express = require("express");
const router = express.Router();
const {
    managerListing
} = require("../models");

// request-запроc response -ответ
router.post("/new", async (req, res) => {
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

router.get("/all", async (req, res) => {
    try {
        const getManagerListing = await managerListing.findAll();
        res.send(getManagerListing);

    } catch (err) {
        res.status(500).json({
            error: "An error occurred while trying to get  listings"
        });
    }
});

router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;

    await managerListing.destroy({
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