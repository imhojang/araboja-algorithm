// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// solution #1 - iterative with hashmap

// function vowels(str) {
// 	const vowels = { a: 1, e: 1, i: 1, o: 1, u: 1 };

// 	let count = 0;

// 	for (let char of str.toLowerCase()) {
// 		if (vowels[char]) {
// 			count++;
// 		}
// 	}

// 	return count;
// }

// solution #2 - iterative with array.includes

function vowels(str) {
	let count = 0;
	let vowelChecker = ['a','e','i','o','u'];

	for (let char of str.toLowerCase()) {
		if (vowelChecker.includes(char)) {
			count++;
		}
	}

	return count;
}

module.exports = vowels;
