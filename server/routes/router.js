const express = require("express");
const router = express.Router();
const listingRoutes = require("./listing-routes");

const regEmployee = require('./regEmployee')
const login = require('./Login')
const variationListingsRoutes = require('./variationListings-routes');
const problemVariationListingsRoutes = require('./problem-variationsListing-routes')

const profile = require('./Profile')

const addPermittedBrand = require('./brand-routes');
const addBannedBrand = require('./bannedBrand-routes');

// const getBannedBrand = require('./getBannedBrand');



// NEW
router.use("/listings", listingRoutes); //office-manager
router.use('/brands', addPermittedBrand); //searcher
router.use('/variation-listings', variationListingsRoutes) //office-manager
router.use('/problem-variationsListing', problemVariationListingsRoutes) //manager
// NEW



router.use('/registration', regEmployee);

// router.use('/gluedListing', getGluedListing);
router.use('/login', login);
router.use('/profile', profile);
router.use('/bannedBrand', addBannedBrand)
// router.use('/getBannedBrand', getBannedBrand);







module.exports = router;