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
        department: req.body.department,
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
});

router.get('/all', async (req, res) => {
    try {
        const Users = await User.findAll();
        res.send(Users);

    } catch (err) {
        res.status(500).json({
            error: "An error occurred while trying to get  listings"
        });
    }
})

router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;

    await User.destroy({
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot User Listing with id=${id}. Maybe User was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
});


router.put('/update/:id', async (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Listings was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Listing with id=${id}. Maybe Listing was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Listing with id=" + id
            });
        });
})


module.exports = router;