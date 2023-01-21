//Get a string 
//Get rid of punctuation
//Works with multiple words in a string e.g 'This litle cat'
//Doesn't just return true 
//A string is entered => string is lowercased => punctuation and whitespaces removed => compared with the same string but reversed => returns true or false.

const palindromes = function (word) {
    let str = word.toLowerCase().replace(/[^\w\']|_/g, "")

    return (str
        .split('')
        .reverse()
        .join('') === str);
};

// Do not edit below this line
module.exports = palindromes;
