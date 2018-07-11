/* 7kyu. Sum of odd numbers

Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8
*/
// Можно было просто через подсчет 2^2 (где 2-номер строки) или 5^5 и т.д.
function rowSumOddNumbers(n) {
    const rows = n;
    let i, j;
    var summ = 1,
        finSumm = 0;
    if (n == 1) return 1;
    for (i = 1; i < rows; i++) {
        for (j = 0; j < i + 1; j++) {
            summ = summ + 2;
            if (i == rows - 1) {
                finSumm = finSumm + summ;
            }
        }
    }
    return finSumm;
}