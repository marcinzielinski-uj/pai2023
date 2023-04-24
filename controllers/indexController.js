/*
index Controller
 */
const getIndex = (req,res) => {
    /// SERVICE LAYER
    res.render('index', { title: 'Express', lname: 'Jan' });
}

module.exports = {
    getIndex
}
