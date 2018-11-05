// Silnia

var factorial = function fact(number){
    if(number <= 1) return 1;
 
    return Math.floor(number) * fact(Math.floor(number) - 1);
}

console.log(factorial(6));


function facto(number){
    var n = Math.floor(number);

    var result = 1;
    for(n; n > 0; n--){
        result *= n;
    }
    return result;
}

console.log(facto(6));