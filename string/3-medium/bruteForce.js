var lengthOfLongestSubstring = function (s) {
    const n = s.length;
    let res = 0;

    console.log(`Input string: "${s}"`);

    for (let i = 0; i < n; i++) {
        console.log(`\n🔁 Outer loop: i = ${i}`);

        for (let j = i; j < n; j++) {

            // slice method does not affect original array.It retrns new array
            const substring = s.slice(i, j + 1);

            console.log(`  🔄 Inner loop: j = ${j} → Checking substring: "${substring}"`);
            
            const {isUnique,length} = checkRepetition(s, i, j);
            console.log(`    ✅ Is substring "${substring}" unique? ${isUnique}`);

            if (isUnique) {
                const newLen = j - i + 1;
                if (newLen > res) {
                    console.log(`    🚀 New max length found: ${newLen} (previous res = ${res})`);
                }
                res = Math.max(res, length);
            }
        }
    }

    console.log(`\n🎯 Final Result: Longest substring without repeating characters = ${res}`);
    return res;

    function checkRepetition(s, start, end) {
        const chars = new Set();
        console.log(`    🕵️‍♂️ Checking repetition from index ${start} to ${end}`);

        for (let i = start; i <= end; i++) {
            const c = s[i];
            console.log(`      🔹 Checking char '${c}' at index ${i}`);

            if (chars.has(c)) {
                console.log(`      ❌ Duplicate found: '${c}'`);
                return {isUnique:false,length:chars.size};
            }

            chars.add(c);
            console.log(`      ✅ Added '${c}' to set: [${[...chars].join(", ")}]`);
        }

        return {isUnique:true,length:chars.size};
    }
};

let str = "abcabcbb";
lengthOfLongestSubstring(str);
