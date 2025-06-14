var validWordAbbreviation = function(word, abbr) {
    let wordPtr = 0;
    let abbrPtr = 0;

    while (abbrPtr < abbr.length) {
        let sum = 0;

        // If abbr starts with '0' as a number, it's invalid (leading zero)
        if (abbr[abbrPtr] === '0') return false;

        // Accumulate number if it's a digit
        while ( abbr[abbrPtr] >= '0' && abbr[abbrPtr] <= '9') {
            sum = sum * 10 + parseInt(abbr[abbrPtr]);
            abbrPtr++;
        }

        if (sum > 0) {
            wordPtr += sum;
        } else {
            // if characters don't match
            if (word[wordPtr] !== abbr[abbrPtr]) {
                return false;
            }
            wordPtr++;
            abbrPtr++;
        }
    }

    return wordPtr === word.length;
};


let word = "internationalization", abbr = "i12iz4n"

let word1 = "apple" , abbr1 = "a2e"

let word2 = "word", abbr2 = "3e"

// console.log(validWordAbbreviation(word,abbr));
console.log(validWordAbbreviation(word1,abbr1));

//  i n t e r n a  t i o n    a  l  i  z  a  t  i  o  n
//  0 1 2 3 4 5 6  7 8 9 10   11 12 13 14 15 16 17 18 19

// i 1   2  i z  4 n
// 0  1  2  3 4  5 6

// w  o  r  d 
// 0  1  2  3

// 3  e
// 0  1

// sum = 0

// wordPtr = 3    


// abbrPtr = 1   
