const express = require("express");
const router = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const {
    User
} = require("../models");

router.use(cors());

process.env.SECRET_KEY = 'secret'



// login-
router.get('', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    User.findOne({
            where: {
                id: decoded.id
            }
        })
        .then(user => {
            if (user) {
                res.json(user)
            } else {
                res.send('user does not exist')
            }
        })
        .catch(err => {
            res.send('error', err)
        })

})

module.exports = router;