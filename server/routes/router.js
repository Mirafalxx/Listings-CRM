const express = require("express");
const router = express.Router();
const listingRoutes = require("./listing-routes");
const auth = require('./auth')
const variationListingsRoutes = require('./variationListings-routes');
const problemVariationListingsRoutes = require('./problem-variationsListing-routes')
const profile = require('./Profile')
const brandRoutes = require('./brand-routes');
const addBannedBrand = require('./bannedBrand-routes');


// const getBannedBrand = require('./getBannedBrand');



// NEW
router.use("/listings", listingRoutes); //office-manager
router.use('/brands', brandRoutes); //searcher
router.use('/variation-listings', variationListingsRoutes) //office-manager
router.use('/problem-variationsListing', problemVariationListingsRoutes) //manager
router.use('/auth', auth); //registration

// NEW

// router.use('/gluedListing', getGluedListing);

router.use('/profile', profile);
router.use('/bannedBrand', addBannedBrand)
// router.use('/getBannedBrand', getBannedBrand);







module.exports = router;