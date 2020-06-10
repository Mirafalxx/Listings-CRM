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

router.post('/reg', (req, res) => {
    const today = new Date();

    const userData = {
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        created: today
    }

    User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            if (!user) {
                const hash = bcrypt.hashSync(userData.password, 10)
                userData.password = hash;
                User.create(userData)
                    .then(user => {
                        let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                            expiresIn: 1440
                        })
                        res.json({
                            token: token
                        })
                    })
                    .catch(err => {
                        res.send('error', err)
                    })
            } else {
                res.json({
                    error: 'User already exists'
                })
            }
        })
        .catch(err => {
            res.send('error', err)
        })

})


router.post('/login', (req, res) => {
    User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 1440
                })
                res.json({
                    token: token
                })
            } else {
                res.send('user does not exist')
            }
        })
        .catch(err => {
            res.send('error', err)
        })
})



module.exports = router;