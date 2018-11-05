// Fibbonaci

function Fibb(number) {
    if (number <= 2) return 1;

    return Fibb(number - 1) + Fibb(number - 2);
}

console.log(Fibb(10));