// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// solution #1

function anagrams(stringA, stringB) {
	function generateCharMap(string) {
		const newString = string.replace(/[^\w]/g, '').toLowerCase();
		const charMap = {};
		for (let char of newString) {
			charMap[char] = charMap[char] + 1 || 1;
		}
		return charMap;
	}

	const charMapA = generateCharMap(stringA);
	const charMapB = generateCharMap(stringB);

	const charMapALength = stringA.length;
	const charMapBLength = stringB.length;

	const greaterCharMap =
		charMapALength > charMapBLength ? charMapA : charMapB;

	for (let char in greaterCharMap) {
		if (charMapA[char] !== charMapB[char]) {
			return false;
		}
	}
	return true;
}

anagrams('One one', 'One one c');

// word.replace(/[^\w]/g, '').toLowerCase()
module.exports = anagrams;
