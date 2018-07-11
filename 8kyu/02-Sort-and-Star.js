/* 8kyu. Sort and Star

You will be given an vector of string(s). You must sort it alphabetically (case-sensitive!!) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

function twoSort(s) {
    const sortArr = s.sort((a, b) => {
        return ((a < b) ? -1 : 1);
    });
    var result = sortArr[0].split('').join('***');
    return result;
}