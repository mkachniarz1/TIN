// Liczba pierwsza

function IsPrimeNum(num) {
    
    if (num == 2) {
        console.log(`Liczba ${num} jest liczbą pierwszą.`);
        return true;
    }
    if (num > 2) {
        for (i = 2; i < num; i++) {
            if (num % i == 0) {
                console.log(`Liczba ${num} nie jest liczbą pierwszą.`);
                return false;
            } else {
                console.log(`Liczba ${num} jest liczbą pierwszą.`);
                return true;
            }
        }
    }
}

IsPrimeNum(1);
IsPrimeNum(2);
IsPrimeNum(3);
IsPrimeNum(4);
IsPrimeNum(5);