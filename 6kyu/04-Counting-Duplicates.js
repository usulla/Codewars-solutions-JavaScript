/* 6kyu. Counting Duplicates

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (bandB)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function duplicateCount(text) {

    var arr = text.toLowerCase().split(''); // arr

    var newArr = arr.filter((item, pos) => { // pos is a index in a string
        return arr.indexOf(item) !== pos; // получили массив только повторяющихся символов
    });

    return newArr.filter((item, pos) => { // взяли только один элемент
    	/* indexOf находит только 1-е совпадение. То есть, если символ повторяется, то он найдет 1-й и сравнит его номер позиции в строке с номером текущей итерации в filter. Если они не совпадут, то отбрасываем этот символ */
        return newArr.indexOf(item) == pos;  
    }).length; // count length result array
}