function isPalindrom(word) {
    word = word.replace(/\s+/g, '');
    
    var half = word.length / 2;

    for(var i = 0 ; i < half; i++){
        if(word.charAt(i) != word.charAt(word.length - 1 -i)){
            return false;
        }
    }
    return true;
}

console.log(isPalindrom('kobyla ma maly bok'));

// 0, 1, 2 ,3 ,4 
// 0, 1, 2 ,3 ,4, 5 