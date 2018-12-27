const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

exports.home = (req, res) => {
    res.render('home');
};

exports.calculate = (req, res) => {
    var xmlReq = new XMLHttpRequest();
    xmlReq.onreadystatechange = calc(req.body.firstNumber, req.body.secondNumber, req.body.opp);
};

function calc(n1, n2, opp) {
    document.getElementById("result").innerHTML = `${n1}, ${n2}, ${opp}`;

}