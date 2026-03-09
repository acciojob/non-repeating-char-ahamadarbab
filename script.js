function firstNonRepeatedChar(str) {
    if (!str) return null;

    let count = {};

    // Step 1: Count frequency of each character
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        count[ch] = (count[ch] || 0) + 1;
    }

    // Step 2: Find first character with frequency 1
    for (let i = 0; i < str.length; i++) {
        if (count[str[i]] === 1) {
            return str[i];
        }
    }

    // Step 3: If none found
    return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
