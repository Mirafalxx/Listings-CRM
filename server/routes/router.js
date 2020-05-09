const express = require("express");
const router = express.Router();
//
const createListing = require("./createListing");
const getListing = require("./getListing");
const regEmployee = require('./regEmployee')
const login = require('./Login')
const partnersListing = require('./PartnersListing');
const managerListing = require('./managerListing')
// const test = require('./test'); //перепрвоерить и добавить на фронт
// const createListing2 = require('./createListing2');
const getGluedListing = require('./getGluedListing');
const profile = require('./Profile')
const deleteListing = require('./deleteListing')
const deleteGluedListing = require('./deletePartners')


//

/* POST REQUESTS*/
router.use("/", createListing);
router.use('/registration', regEmployee);
router.use('/joinListing', partnersListing);
router.use('/gluedListing', getGluedListing);
router.use('/login', login);
router.use('/profile', profile);
router.use('/managerListing', managerListing)




/* POST REQUESTS*/

/*GET REQUESTS */
router.use("/getListings", getListing);
router.use('/deleteListing', deleteListing)
router.use('/deleteGluedListing', deleteGluedListing)
/*GET REQUESTS */
module.exports = router;