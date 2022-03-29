const driverService = require('./driver.service')

module.exports = {
    getDrivers,
    getDriver,
    deleteDriver,
    updateDriver
}

async function getDrivers(req, res) {
    try {
        const drivers = await driverService.getDrivers()
        res.send(drivers)
    } catch (error) {
        res.status(500).send({ err: 'Failed to get drivers' })
    }
}

async function getDriver(req, res) {
    try {
        const driver = await driverService.getDriverByName(req.params.name)
        res.send(driver)
    } catch (err) {
        res.status(500).send({ err: 'Failed to get driver' })
    }
}

async function deleteDriver(req, res) {
    try {
        await driverService.deleteDriver(req.params.name)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        res.status(500).send({ err: 'Failed to delete driver' })
    }
}

async function updateDriver(req, res) {
    try {
        const driver = req.body
        const savedDriver = await driverService.updateDriver(driver)
        res.send(savedDriver)
    } catch (err) {
        res.status(500).send({ err: 'Failed to update driver' })
    }
}
