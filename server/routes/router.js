const express = require("express");
const router = express.Router();
//
const createListing = require("./createListing");
const getListing = require("./getListing");
const regEmployee = require('./regEmployee')
const createGluedListings = require('./createGluedListing');
const test = require('./test'); //перепрвоерить и добавить на фронт
const createListing2 = require('./createListing2');
const getGluedListing = require('./getGluedListing')

//

/* POST REQUESTS*/
router.use("/addListing", createListing);
router.use('/regEmployee', regEmployee);
router.use('/joinListing', createGluedListings);
router.use('/testListig', test)
router.use('/addListing2', createListing2);
router.use('/gluedListing', getGluedListing)
/* POST REQUESTS*/

/*GET REQUESTS */
router.use("/getListings", getListing);
/*GET REQUESTS */
module.exports = router;