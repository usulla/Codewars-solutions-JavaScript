/* 6kyu. Valid Braces

Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/
function validBraces(braces) {
    const arrBraces = braces.split(''),
        open = ['(', '[', '{'],
        close = [')', ']', '}'];
    let stack = [],
        indexOpen, indexClose, i;
    if (close.indexOf(arrBraces[0]) !== -1) return false;

    for (i = 0; i < arrBraces.length; i++) {
        if (open.indexOf(arrBraces[i]) !== -1) {
            stack.push(arrBraces[i]);
        } else if (close.indexOf(arrBraces[i]) !== -1) {
            indexOpen = open.indexOf(stack[stack.length - 1]);
            indexClose = close.indexOf(arrBraces[i]);
            if (indexClose == indexOpen) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return !stack.length; // true or false
}


// Solution 2

function validBraces(braces) {
    var matches = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    var stack = [];
    var currentChar;

    for (var i = 0; i < braces.length; i++) {
        currentChar = braces[i];

        if (matches[currentChar]) { // opening braces
            stack.push(currentChar); // if opening braces add to stack
        } else { // closing braces
            if (currentChar !== matches[stack.pop()]) { // matches['('] == ')'
                return false;
            }
        }
    }

    return stack.length === 0; // any unclosed braces left?
}
// Solution 3
// method test: regexObj.test(str) - Search same
function validBraces(braces) {
    while (/\(\)|\[\]|\{\}/g.test(braces)) {
        braces = braces.replace(/\(\)|\[\]|\{\}/g, '');
    }
    return !braces.length;
}

// Solution 4

function validBraces(braces) {
    while (braces.indexOf('{}') != -1 || braces.indexOf('()') != -1 || braces.indexOf('[]') != -1) {
        braces = braces.replace('{}', '').replace('()', '').replace('[]', '');
    }
    return braces.length == 0;
}

validBraces('(([]{}))'); //true 
validBraces('[(])'); //false