

exports.hello = (req, res) => {
    res.render('home');
};

exports.form = (req, res) => {
    res.render('form');
};

exports.home = (req, res) => {
    res.render('index');
}
