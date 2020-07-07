// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
	let count = 1;
	while (count <= n) {
		let print = '';

		if (!(count % 3) && !(count % 5)) {
			print = 'fizzbuzz';
		} else if (!(count % 3)) {
			print = 'fizz';
		} else if (!(count % 5)) {
			print = 'buzz';
		} else {
			print = count;
		}

		console.log(print);
		count++;
	}
}

module.exports = fizzBuzz;
