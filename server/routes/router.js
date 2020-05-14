const express = require("express");
const router = express.Router();
const createListing = require("./createListing");
const getListing = require("./getListing");
const regEmployee = require('./regEmployee')
const login = require('./Login')
const partnersListing = require('./PartnersListing');
const managerListing = require('./managerListing')
const getGluedListing = require('./getGluedListing');
const profile = require('./Profile')
const deleteListing = require('./deleteListing')
const deleteGluedListing = require('./deletePartners')
const getManagerListings = require('./getManagerListing')
const deleteManagerListing = require('./deleteManagerListing');
const addPermittedBrand = require('./addBrand');
const addBannedBrand = require('./bannedBrand');
const getPermittedBrand = require('./getAllowedBrand');
const deleteAllowedBrand = require('./deleteAllowedBrand');
const getBannedBrand = require('./getBannedBrand');



//

/* POST REQUESTS*/
router.use("/addListing", createListing);
router.use('/registration', regEmployee);
router.use('/joinListing', partnersListing);
router.use('/gluedListing', getGluedListing);
router.use('/login', login);
router.use('/profile', profile);
router.use('/managerListing', managerListing);
router.use('/addBrand', addPermittedBrand);
router.use('/bannedBrand', addBannedBrand)
router.use('/deleteAllowedBrand', deleteAllowedBrand);


/* POST REQUESTS*/

/*GET REQUESTS */
router.use("/getListings", getListing);
router.use('/getManagerListings', getManagerListings);
router.use('/deleteListing', deleteListing);
router.use('/deleteGluedListing', deleteGluedListing);
router.use('/deleteManagerListing', deleteManagerListing);
router.use('/allowedBrand', getPermittedBrand);
router.use('/getBannedBrand', getBannedBrand);
/*GET REQUESTS */
module.exports = router;