/* 6kyu. Roman Numerals Decoder

Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21
Help:
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
*/

// Not end solutions (without minus (IV, IX)
const solution = roman => {
    const romanTr = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    var exception = ["CD", "CM", "XL", "XC", "IV", "IX"]
    const newNumber = roman.split('').map(item => {
        for (key in romanTr) {
            if (key == item) {
                return (romanTr[item]);
            }
        }
    }).reduce((summ, item, index) => {
        return summ = (summ + item);
    }, 0);
    return newNumber;
};

//Solution 2
function solution(roman) {
    var number = 0;
    var romanNum = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
    var exception = ["CD", "CM", "XL", "XC", "IV", "IX"]
    for (var i = 0; i < roman.length; i++) {
        exception.indexOf(roman[i] + roman[i + 1]) === -1 ?
            number += romanNum[roman[i]] :
            number -= romanNum[roman[i]];
    }
    return number;
}