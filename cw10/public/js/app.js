const xhr = new XMLHttpRequest();

document.getElementById("mainForm").addEventListener('input', function () {
    var firstNumber = parseFloat(this.children[0].lastChild.value);
    var secondNumber = parseFloat(this.children[1].lastChild.value);
    var opp = document.querySelector('input[name="opp"]:checked') != null ? document.querySelector('input[name="opp"]:checked').value : null;
    console.log(secondNumber);
    console.log(opp);

    xhr.open('GET', '/');

    var result = "";
    if (firstNumber && secondNumber && opp) {
        if(opp == "add") result = firstNumber + secondNumber;
        if(opp == "sub") result = firstNumber - secondNumber;
        if(opp == "mul") result = firstNumber * secondNumber;
        if(opp == "div") result = firstNumber / secondNumber;
    }

    xhr.onload = function () {
        document.getElementById("result").innerHTML = result;
    }
    xhr.send();
});



