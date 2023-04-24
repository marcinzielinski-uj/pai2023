/*
NBP Service API
 */

const getRatesApi = () => {
    var url = 'https://api.nbp.pl/api/exchangerates/tables/a/?format=json';
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
           return error;
        });
}

const getRateXApi = (code) => {
    var url = 'http://api.nbp.pl/api/exchangerates/rates/a/'+code;
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
}

module.exports = {
    getRatesApi,
    getRateXApi
}