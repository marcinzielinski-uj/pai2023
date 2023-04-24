/*
    World Service
 */

const dalWorld = require('../datalayer/dalWorld');

const getAllCountries = () => {
    const allCounties = dalWorld.getAllCountries();
    // Operacje przetworzenia tych danych
    return allCounties;
}

module.exports = {
    getAllCountries
}
