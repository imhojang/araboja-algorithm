// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/* Solution #1
function maxChar(str) {
	let charMap = {};

	for (let char of str) {
		charMap[char] = charMap[char] + 1 || 1;
	}

	let maxChar = '';
	let max = -Infinity;

	for (let char in charMap) {
		if (max < charMap[char]) {
			maxChar = char;
			max = charMap[char];
		}
	}

	// console.log(`charMap: ${JSON.stringify(charMap, null, 4)}`);

	return maxChar;
}
*/

// Solution #2

function maxChar(str) {
	let charMap = {};

	for (let char of str) {
		charMap[char] = charMap[char] + 1 || 1;
	}

	let max = -Infinity;
	let maxChar = '';

	for (let char in charMap) {
		if (max < charMap[char]) {
			max = charMap[char];
			maxChar = char;
		}
	}

	return maxChar;
}



/* Solution #3
function maxChar (str) {
  const charMap = {}

  for (let i = 0; i < str.length; i++) {
    if (!charMap[str[i]]) {
      charMap[str[i]]++
    } else {
      charMap[str[i]] = 1
    }
  }

  let maxIdx = 0;
  let valuesArr = Object.values(charMap);

  function findMax (prev, curr, idx) {
    const max = Math.max(prev, curr)
    maxIdx = max === curr ? idx : maxIdx
  }

  valuesArr.reduce(findMax)

  return Object.keys(charMap)[maxIdx]
}
*/

module.exports = maxChar;
