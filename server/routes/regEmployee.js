"use strict";
var express = require("express");
var router = express.Router();
var {
    User
} = require("../models");
const bcrypt = require('bcrypt');

router.post("/", async (req, res) => {
    console.log("registration : ", req.body);

    try {
        const today = new Date();
        const salt = await bcrypt.genSalt();
        const hashedPass = await bcrypt.hash(req.body.password, salt)
        const userData = {
            login: req.body.login,
            password: hashedPass,
            created: today
        };
        if (userData) {
            const response = await User.create(userData);

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
            error: "An error occurred while trying to register new user"
        });
    }
});

module.exports = router;













// const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// const {
//     User
// } = require("../models");
// router.use(cors());

// process.env.SECRET_KEY = "secret";

// router.post("/", (req, res) => {
//     const today = new Date();
//     const userData = {
//         login: req.body.login,
//         password: req.body.password,
//         created: today
//     };

//     User.findOne({
//             where: {
//                 login: req.body.login
//             }
//         })
//         //TODO bcrypt
//         .then(user => {
//             if (!user) {
//                 User.create(userData)
//                     .then(user => {
//                         let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
//                             expiresIn: 1440
//                         });
//                         res.json({
//                             token: token
//                         });

//                     })
//                     .catch(err => {
//                         res.send("error: " + err);
//                     });
//             } else {
//                 res.json({
//                     error: "Users already exists"
//                 });

//             }
//         })

//         .catch(err => {
//             res.send("error: " + err);
//         });
// });

// module.exports = router;