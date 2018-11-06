// Najdłuzsze słowo w ciągu

function longestWord(sentence){


    var words = sentence.replace(/\s+/g, " ").split(" ");
    var res = "";
    for(i = 0; i < words.length; i++){
        if(words[i].length > res.length)
            res = words[i];
    }
    console.log(`Najdłuzsze słowo to : ${res}`);
}

longestWord("1234   123  1234567 12345  2 124356");