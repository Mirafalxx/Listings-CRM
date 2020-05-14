const express = require("express");
const router = express.Router();
const {
    permittedBrand
} = require("../models");

router.get("/", async (req, res) => {
    try {
        const permittedBrands = await permittedBrand.findAll();
        res.send(permittedBrands);

    } catch (err) {
        res.status(500).json({
            error: "An error occurred while trying to get  listings"
        });
    }
});



module.exports = router;