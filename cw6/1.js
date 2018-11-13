function TwoSecondNumbers(nums) {
    nums.sort(function (a, b) { return a - b; });

    var secMin, secMax, min, max;
    min = nums[0];
    max = nums[nums.length - 1];

    for (i = 0; i < nums.length; i++) {
        if (nums[i] > min) {
            secMin = nums[i];
            break;
        }
    }
    for (i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < max) {
            secMax = nums[i];
            break;
        }
    }

    console.log(`Druga najmniejsza liczba to ${secMin}`);
    console.log(`Druga najwieksza liczba to ${secMax}`);
}

TwoSecondNumbers([10, 10, 5, 2, 4, 5, 2, 1, 0, 33, 4, 7, 8, 5]);