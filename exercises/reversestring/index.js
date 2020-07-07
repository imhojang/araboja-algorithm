// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
// 	return str.split('').reverse().join('');
// }

// function reverse(str) {
// 	let reversedStr = '';
// 	for (let i = 0; i < str.length; i++) {
// 		reversedStr = str[i] + reversedStr;
// 	}
// 	return reversedStr;
// }

function reverse(str) {
	let reversed = '';
	// for (let value of iterable object)
	for (let character of str) {
		reversed = character + reversed;
	}
}

// function reverse(str) {
// 	return str.split('').reduce((rev, char) => char + rev, '');
// }


module.exports = reverse;
