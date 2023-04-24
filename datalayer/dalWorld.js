/*
    Country Data Access Layer (DAL)
    Each function item is Data Access Object
 */

// KONFIGURACJA BAZY DANYCH
const mysql = require("mysql2/promise");
const pool = mysql.createPool({
    // Ustawienia DB w pliku .env
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

const getAllCountries = async () => {
    const sql = 'SELECT Code,Name FROM country';
    let r = {};
    try {
        const [rows] = await pool.query(sql);
        r = rows
    } catch (err) {
        console.error(err)
    }
    return r;
};

module.exports = {
    getAllCountries
};