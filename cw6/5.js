//funkcja konstruktora

function student(name, lastname, indexNr, grades) {
    this.name = name;
    this.lastname = lastname;
    this.indexNr = indexNr;
    this.grades = grades;

    this.getInfo = function () {
        sum = 0;
        this.grades.forEach(function (element) {
            sum += element;
        });
        console.log(this.name + " " + this.lastname + " : " + Math.round(sum / this.grades.length * 100) / 100);
    }
}

var s = new student("Maciej", "Kachniarz", 15770, [2, 3, 4, 4, 5, 5]);
s.getInfo();