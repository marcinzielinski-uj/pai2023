/*
    User Controller
 */

const userService = require('../services/userService');

const getIndex = (req, res) => {
    res.render('index', { title: 'Express', lname: 'Jan' });
}

const getUsers = async(req,res) => {
    // Funkcja SERVICE LAYER
    const allUsers =  await userService.getAllUsers();
    res.json(allUsers);
}

module.exports = {
    getIndex,
    getUsers
}
