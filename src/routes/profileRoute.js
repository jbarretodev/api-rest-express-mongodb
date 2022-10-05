const express = require('express')
const profileController = require('../controllers/profileController')

const router = express.Router()

router.post('/',profileController.newProfile)


module.exports = router