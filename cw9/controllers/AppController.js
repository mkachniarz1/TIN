exports.store = (req, res) => {
    res.render('formdata', { dataname: req.body.name, datalastname: req.body.lastName, datamail: req.body.email });
};

exports.jsondata = (req, res) => {
    res.render('jsondata', { jsonname: req.body.name, jsonlastname: req.body.lastname, jsonmail: req.body.mail });
}