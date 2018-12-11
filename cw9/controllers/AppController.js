exports.store = (req, res) => {
    // res.json({
    //     'name' : req.body.name,
    //     'last name' : req.body.lastName,
    //     'email' : req.body.email
    // });

    res.render('formdata', {name: req.body.name, lastname: req.body.lastName, mail: req.body.email});
};