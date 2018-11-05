// Kolejność alfabetyczna liter

function alphabeticalOrder(sentence) {
    var temp = new Array(sentence.length);

    for (i = 0; i < temp.length; i++) {
        temp[i] = sentence.charCodeAt(i);
    }
    temp.sort(compareNumbers);

    var res = "";
    for (i = 0; i < temp.length; i++) {
        res += String.fromCharCode(temp[i]);
    }
    console.log(res);
}

function compareNumbers(a, b) {
    return a - b
}

alphabeticalOrder("webmaster");

