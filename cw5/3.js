function IsPalindrom(sentence) {
    var sen = sentence.replace(/ /g, '').toLowerCase();

    for (var i = 0; i < sen.length / 2; i++) {
        if (sen[i] != sen[sen.length - 1 - i]) {
            console.log("This is not a palindrom");            
            return false;
        }
    }
    return true;
    console.log("This is a palindrom");
}

IsPalindrom("Kobyła ma mały bok");
