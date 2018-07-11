/* 5kyu. Sum of Pairs

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * entire pair is earlier, and therefore is the correct answer
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * entire pair is earlier, and therefore is the correct answer
== [3, 7]
*/

var sum_pairs = function(ints, s) {
    const length = ints.length;
    const newArr = [];
    let i, j;

    for (i = 0; i < length; i++) {
        for (j = i + 1; j < length; j++) {
            if (ints[i] + ints[j] == s) {
                console.log(i, j);
                newArr.push(ints[i], ints[j]);
                return newArr;
            }
        }
    }
}

// console.log( sum_pairs([1, 4, 8, 7, 3, 15], 8) ) // [1, 7] 
console.log(sum_pairs([10, 5, 2, 3, 7, 5], 10)) // [0, -6]