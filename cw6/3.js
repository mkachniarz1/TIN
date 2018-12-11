//Binary search

function binSearch(array, num) {
    array.sort(function (a, b) { return a - b; });

    var mid, temp;

    while (true) {
        mid = Math.floor(array.length /2);
        temp = array[mid];
        if (temp != num) {
            if (num > temp)
                array = array.slice(mid);
            else if (num < temp)
                array = array.slice(0, mid)
        } else {
            console.log("Your number is in array.");
            return;
        }
        if(array.length == 1 && temp != num){
            console.log("Your number is NOT in array");
            return;
        }
    }
}

function a() {
    var array = [1, 2, 3, 3, 5];
    array.sort(function (a, b) { return a - b; });
    array = array.slice(0, 3);
    console.log(array);
}

binSearch([1,2,3,4,5,6,7,87,8,9,9,9,0,9,7,6,5,5,4], 87);

