function amountToCoins(amount, coins) {
    var coinsInOrder = coins.sort(function (a, b) { return b - a; });

    var res = [];
    var temp = amount;
    while (temp > 0) {
        for (i = 0; i < coins.length; i++) {
            if (temp >= coins[i]) {
                temp -= coins[i];
                res.push(coins[i]);
                break;
            }
        }
    }
    console.log(res.toString());
}

amountToCoins(46, [2, 1, 5, 25, 10]);