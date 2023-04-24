/*
nbp Controller
 */

const nbpService = require('../services/nbpService');

const getIndex = (req,res) => {
    res.render('nbpIndex', { title: 'NBP', lname: 'NBP' });
}

const getRatesA = async (req,res) => {
    const data = await nbpService.getRatesApi();
    console.log(data);
    res.render('nbpRates', {title: 'Kursy NBP tabela A', data: data[0]});
}

const getRateX = async (req,res) => {
    if(req.query.code){
         const rate = await nbpService.getRateXApi(req.query.code);
         //console.log(rate);
             res.render('nbpRateX',{title: 'Wybierz walutę ...', data:rate});
    }
    else res.render('nbpRateX',{title: 'Wybierz walutę ...', data:false});
}

module.exports = {
    getIndex,
    getRatesA,
    getRateX
}
