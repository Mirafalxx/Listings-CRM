"use strict";
let express = require("express");
let router = express.Router();
let {
  Listing
} = require("../models");


router.post("/new", async (req, res) => {
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


router.get("/all", async (req, res) => {
  try {
    const Listings = await Listing.findAll();
    res.send(Listings);

  } catch (err) {
    res.status(500).json({
      error: "An error occurred while trying to get  listings"
    });
  }
});

router.get("/all/:id", async (req, res) => {
  try {

    const ListingsID = await Listing.findByPk(parseInt(req.params.id));
    res.send(ListingsID);
  } catch (err) {
    res.status(500).json({
      error: "An error occurred while trying to get list of  songs by id"
    });
    console.log(err);
  }
});



router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  await Listing.destroy({
      where: {
        id: id
      }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Listing was deleted successfully!"
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