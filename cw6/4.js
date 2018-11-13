//object initializer

var myObject = {
    param1: 123,
    param2: "param2",
    param3: [4, 8, 6],
    metoda1: function () {
        return 123 > this.param3.length;
    },
    metoda2: function () {
        console.log(this.param3.sort(function (a, b) { return a - b; }));
    },
    metoda3: function () {
        console.log(this.param2);
    }
}

console.log(myObject.metoda1());
myObject.metoda2();
myObject.metoda3();

function objectTypes(obj){
   for(param in obj){
       console.log(param + " -> "+ typeof(obj[param]));
   }
}

objectTypes(myObject);