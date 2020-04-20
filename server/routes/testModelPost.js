"use strict";
var express = require("express");
var router = express.Router();
var {
    TestModel
} = require("../models");

// import Sequelize from 'sequelize'


// request-запроc response -ответ
router.post("/", async (req, res) => {
    // console.log("Add new listing", req.body);
    try {
        let {
            ProductASIN
        } = req.body;
        if (ProductASIN) {
            const response = await TestModel.create({
                ProductASIN
            });

            if (response) res.status(200).send({
                message: `Successfully added: ${JSON.stringify(response)}`
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