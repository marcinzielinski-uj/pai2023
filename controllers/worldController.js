/*
World Controller
 */

const worldService = require('../services/worldService')

const getWorldIndex = (req,res) => {
    res.render('worldIndex', { title: 'World', lname: 'world' });
}

const getWorldCountry = async (req,res) => {
    const allCountries = await worldService.getAllCountries();
    res.render('worldCountry', { title: 'World', data: allCountries });
}

const getWorldCity = (req,res) => {
    res.render('worldIndex', { title: 'World', lname: 'world' });
}

module.exports = {
    getWorldIndex,
    getWorldCity,
    getWorldCountry
}
