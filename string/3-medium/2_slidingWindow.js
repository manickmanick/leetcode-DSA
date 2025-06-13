var lengthOfLongestSubstring = function (s) {
    const chars = new Map(); // Map to store character counts

    let left = 0;  // left pointer of the window
    let right = 0; // right pointer of the window
    let res = 0;

    console.log(`Input string: "${s}"`);
    console.log("Sliding window starts...\n");

    while (right < s.length) {
        const r = s.charAt(right); // get the right char
        console.log(`🔵 Right pointer at index ${right} (char = '${r}')`);

        chars.set(r, (chars.get(r) || 0) + 1); // increase count of r
        console.log(`    ➕ Added '${r}' to map: count = ${chars.get(r)}`);
        console.log(`    📊 Current map:`, Object.fromEntries(chars));

        // If we have a duplicate, move the left pointer
        while (chars.get(r) > 1) {
            const l = s.charAt(left);
            console.log(`    ❗ Duplicate '${r}' found. Shrinking window from left.`);

            chars.set(l, chars.get(l) - 1); // decrease count of left char
            console.log(`    ➖ Decreased count of '${l}': count = ${chars.get(l)}`);
            left++;
            console.log(`    ⬅️ Moved left pointer to index ${left}`);
        }

        // Update the result
        const windowSize = right - left + 1;
        if (windowSize > res) {
            console.log(`    ✅ New max length ${windowSize} found from index ${left} to ${right}`);
        }

        res = Math.max(res, windowSize);

        // Move right pointer
        right++;
        console.log("");
    }

    console.log(`🎯 Final Result: Longest substring without repeating characters = ${res}`);
    return res;
};

let str = "pwwkew";
lengthOfLongestSubstring(str);
