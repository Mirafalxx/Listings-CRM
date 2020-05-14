"use strict";
let express = require("express");
let router = express.Router();
let {
  Listing
} = require("../models");

// import Sequelize from 'sequelize'

/* GET users listing. */
// request-запроc response -ответ
router.post("/", async (req, res) => {
  // console.log("Add new listing", req.body);
  try {
    let {
      ProductASIN,
      ProductName,
      Brand,
      Partner,

    } = req.body;
    if (ProductASIN && ProductName) {
      const response = await Listing.create({
        ProductASIN,
        ProductName,
        Brand,
        Partner

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