var longestCommonPrefix = function (strs) {
    if (strs == null || strs.length == 0) {
        console.log("Empty or null input. Returning empty string.");
        return "";
    }

    console.log(`Input strings: ${JSON.stringify(strs)}`);
    for (let i = 0; i < strs[0].length; i++) {
        let c = strs[0][i];
        console.log(`\nChecking character '${c}' at index ${i} from first string.`);

        for (let j = 1; j < strs.length; j++) {
            console.log(`  Comparing with character '${strs[j][i]}' at index ${i} in string "${strs[j]}"`);

            // Check if index i is out of bounds or character doesn't match
            console.log(`  first condition in IF block. i value : ${i} and strs[j] value : ${strs[j]}. if(${i} === ${strs[j].length})`);
            console.log(`  second condition in the IF block. strs[j].charAt(i)  !== c -> ${strs[j]}.charAt(${i}) !== ${c}`);
            
            
            if (i === strs[j].length || strs[j].charAt(i) !== c) {
                console.log(`  Mismatch or end of string found. Returning prefix: "${strs[0].substring(0, i)}"`);
                return strs[0].substring(0, i);
            }
        }
    }

    console.log(`\nAll characters matched. Returning entire first string: "${strs[0]}"`);
    return strs[0];
};


let strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs));