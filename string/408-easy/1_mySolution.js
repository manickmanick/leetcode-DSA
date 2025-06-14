var validWordAbbreviation = function(word, abbr) {
    let wordPtr = 0;
    let abbrPtr = 0;
    let sum = 0;
    while(wordPtr < word.length && abbrPtr < abbr.length){
        if(typeof abbr[abbrPtr] === "string" && sum === 0 && abbr[abbrPtr] === word[wordPtr]){
            abbrPtr++;
            wordPtr++;
        }else if(abbr.length && abbr[abbrPtr] >= '0' && abbr[abbrPtr] <= '9'){
            sum = sum*10 + +abbr[abbrPtr];
            abbrPtr++;
        }else if(typeof abbr[abbrPtr] === "string" && sum != 0){
            wordPtr+=sum;
            sum=0;
        }else if(typeof abbr[abbrPtr] === "string" && sum == 0 && abbr[abbrPtr] !== word[wordPtr]){
            return false;
        }
        if (abbr[abbrPtr] === '0') return false;
    }
    return wordPtr == word.length;
};

let word = "internationalization", abbr = "i5a11o1"

console.log(validWordAbbreviation(word,abbr));
