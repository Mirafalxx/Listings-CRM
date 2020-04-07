const express = require("express");
const router = express.Router();
//
const createListing = require("./createListing");
const getListing = require("./getListing");
const regEmployee = require('./regEmployee')
const createCluedListings = require('./createGluedListing');
const createPartnersListing = require('./createPartnersLIsting');

//

/* POST REQUESTS*/
router.use("/addListing", createListing);
router.use('/regEmployee', regEmployee);
router.use('/joinListing', createCluedListings);
router.use('/addPartnersListing', createPartnersListing)
/* POST REQUESTS*/

/*GET REQUESTS */
router.use("/getListings", getListing);
/*GET REQUESTS */
module.exports = router;