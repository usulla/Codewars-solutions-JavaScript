/* 5kyu. String incrementer

Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.

Examples:
foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100
Attention: If the number has leading zeros the amount of digits should be considered.
*/

function incrementString(strng) {
    const stringArr = strng.split('').filter(item => {
        return (!Number.isInteger(+item));
    });
    const numberArr = strng.split('').filter(item => {
        return (Number.isInteger(+item));
    });
    const incrNumber = +(numberArr.join('')) + 1;
    if (incrNumber.toString().length >= numberArr.length) return (stringArr.concat(incrNumber)).join('');
    var nullsCount = numberArr.length - incrNumber.toString().length;
    var newNumberArr = incrNumber.toString();
    newNumberArr = (stringArr.concat('0'.repeat(nullsCount) + newNumberArr)).join('');
    return newNumberArr;
}