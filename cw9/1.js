const express = require('express');
const app = express();
const path = require("path");

app.get('/hello', (req, res) => {
    res.sendFile(path.join(__dirname + '/form.html'));
    res.send('Hello World')
});
s
app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname + '/form.html'));
})

app.get('/formdata', (req, res) => {

})
app.listen(3000);

function sendForm() {
    window.location.href = 'www.google.com';
}