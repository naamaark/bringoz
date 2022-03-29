const express = require('express')
const { getDriver, getDrivers, deleteDriver, updateDriver } = require('./driver.controller')
const router = express.Router()

router.get('/', getDrivers)
router.get('/:name', getDriver)
router.put('/', updateDriver)
router.delete('/:name', deleteDriver)

module.exports = router