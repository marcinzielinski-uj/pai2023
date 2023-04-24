/*
    User Service
 */

const daoUser = require('../dataobjects/daoUser');

const getAllUsers = async () => {
    //const allUsers = await daoUser.userFindAll1()
    const allUsers = await daoUser.userFindAll()
    // Operacje przetworzenia tych danych
    return allUsers
}

module.exports = {
    getAllUsers
}
