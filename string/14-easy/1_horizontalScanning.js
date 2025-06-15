var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";

    let prefix = strs[0];
    console.log(`Initial prefix: "${prefix}"`);

    for (let i = 1; i < strs.length; i++) {
        console.log(`\nComparing with: "${strs[i]}"`);

        
        while (strs[i].indexOf(prefix) !== 0) {
            let value = strs[i].indexOf(prefix);
            console.log(`${strs[i]}.indexOf(${prefix}) gives value : ${value}`)
            console.log(`  "${strs[i]}" does not start with "${prefix}"`);
            prefix = prefix.slice(0, prefix.length - 1);
            console.log(`  Reduced prefix: "${prefix}"`);

            if (prefix === "") {
                console.log("  Prefix reduced to empty, returning empty string.");
                return "";
            }
        }
        console.log(`  "${strs[i]}" starts with "${prefix}"`);
    }

    console.log(`\nFinal prefix: "${prefix}"`);
    return prefix;
};


let strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs));
