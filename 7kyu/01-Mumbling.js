/* 7kyu. Mumbling

This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
    let i, j;
    var newStr = '',
        n;
    const length = s.length;
    for (i = 0; i < length; i++) {
        n = 0;
        while (n <= i) {
            if (n == 0) {
                if (n == 0 && n == i) {
                    newStr = newStr + s[i].toUpperCase() + '-';
                } else {
                    newStr = newStr + s[i].toUpperCase();
                }
            } else if (n == i && i !== length - 1) {
                newStr = newStr + s[i].toLowerCase() + '-';
            } else {
                newStr = newStr + s[i].toLowerCase();
            }
            n++;
        }
    }
    return newStr;
}