// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// solution #1 - recursive solution

// function fib(n) {
// 	if (n <= 1) {
// 		return n;
// 	}
// 	return fib(n - 1) + fib(n - 2);
// }

// solution #2 - iterative solution

// function fib(n) {
// 	const fibArr = [];

// 	for (let i = 0; i <= n; i++) {
// 		if (i <= 1) {
// 			fibArr.push(i);
// 		} else {
// 			let add = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
// 			fibArr.push(add);
// 		}
// 	}

// 	return fibArr[fibArr.length - 1];
// }

// fib(5);

// solution #3 - recursive solution advanced with memoization

function fib(n, key = {}) {
	if (n <= 1) {
		return n;
  }
  
  if (key[n]) {
    return key[n]
  } else {
    key[n] = fib(n - 1, key) + fib(n - 2, key);
    return fib(n - 1, key) + fib(n - 2, key);
  }
}

module.exports = fib;
