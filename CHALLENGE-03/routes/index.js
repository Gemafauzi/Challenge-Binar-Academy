const router = require('express').Router()
const auth = require('./auth')
const dashboard = require('./dashboard')
const car = require('./list')
const User = require('../models/users')

router.use('/', auth)

// MIDDLEWARE AUTH
router.use(function(req, res, next) {
    if (User.login === true) {
        next()
    } else {
        res.redirect('/login')
    }
})

router.use('/', dashboard)
router.use('/list', car)

module.exports = router