const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhr = new XMLHttpRequest();

exports.home = (req, res) => {
    res.render('home');
};

// exports.calculate = (req, res) => {
//     var first = req.body.firstNumber;
//     var second = req.body.secondNumber;
//     var opp = req.body.opp;

//     xhr.open('GET', '/');
//     console.log(xhr.responseText);
//     xhr.send();
// };

