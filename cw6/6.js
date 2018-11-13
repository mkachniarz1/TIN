// student prototype

var classes = function () {
    this.classes = ["TIN", "GRK", "SAD", "BYT"];
}
var student = function (imie, nazwisko, nrIndexu) {
    classes.call(this);
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.nrIndexu = nrIndexu;
}

student.prototype = Object.create(classes.prototype);
student.prototype.constructor = classes;

var s = new student("Maciej", "Kachniarz", 15770);
console.log(s);



