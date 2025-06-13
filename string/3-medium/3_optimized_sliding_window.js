var lengthOfLongestSubstring = function (s) {
    let charToNextIndex = new Map(); // Stores the next index we can start from after a duplicate
    let maxLen = 0;
    let left = 0;

    console.log(`🔤 Input string: "${s}"\n`);

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        console.log(`➡️ Right pointer at index ${right} → '${currentChar}'`);

        if (charToNextIndex.has(currentChar)) {
            const prevIndex = charToNextIndex.get(currentChar);
            console.log(`   🔁 Duplicate '${currentChar}' seen before at index ${prevIndex - 1}`);
            left = Math.max(prevIndex, left);
            console.log(`   🔄 Moving left pointer to ${left}`);
        }

        const currentWindowLength = right - left + 1;
        if (currentWindowLength > maxLen) {
            console.log(`   🚀 New max length found: ${currentWindowLength} (from index ${left} to ${right})`);
        }

        maxLen = Math.max(maxLen, currentWindowLength);

        charToNextIndex.set(currentChar, right + 1);
        console.log(`   🗂️ Map update: '${currentChar}' → ${right + 1}`);
        console.log(`   📏 Current window: "${s.slice(left, right + 1)}" | Length: ${currentWindowLength}`);
        console.log('---');
    }

    console.log(`🎯 Final result: Longest substring without repeating characters = ${maxLen}`);
    return maxLen;
};

let str = "abcabcbb";
lengthOfLongestSubstring(str);
