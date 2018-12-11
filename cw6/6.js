// student prototype

var classes =  {
    classes: ["TIN", "GRK", "SAD", "BYT"]
};
var student = function (imie, nazwisko, nrIndexu) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.nrIndexu = nrIndexu;
    var subjects = Object.create(classes);
}

student.prototype = Object.create(classes.prototype);
student.prototype.constructor = classes;

var s = new student("Maciej", "Kachniarz", 15770);
s.classes;
console.log(s);



