const data = require('../../data/data.json')

var gDrivers = data;

module.exports = {
    getDrivers,
    getDriverByName,
    deleteDriver,
    updateDriver
}

async function getDrivers() {
    try {
        return gDrivers;
    } catch (error) {
        console.log('could not get drivers', error);
    }
}

async function getDriverByName(name) {
    try {
        return gDrivers.find(driver => driver.name === name)
    } catch (error) {
        console.log('could not find driver', error);
    }
}

async function deleteDriver(name) {
    try {
        console.log('deleting driver', name);
        const idx = gDrivers.findIndex(driver => driver.name === name);
        gDrivers.splice(idx, 1);
    } catch (error) {
        console.log('could not delete driver', name, error);
    }
}

async function updateDriver(driverToUpdate) {
    try {
        const idx = gDrivers.findIndex(driver => driver.name === driverToUpdate.name);
        gDrivers.splice(idx, 1, driverToUpdate)
        return driverToUpdate;

    } catch (error) {
        console.log('could not update driver', driver.name, error);
    }
}