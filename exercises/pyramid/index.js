// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// solution #1 - iterative solution

// function pyramid(n) {
//   for (let row = 0; row < n; row++) {
//     let str = '';
//     let maxCol = n * 2 - 1;
//     let sideSpace = n - row - 1;
//     for (let col = 0; col < maxCol; col++) {
//       if (col < sideSpace || col >= maxCol - sideSpace) {
//         str += ' ';
//       } else {
//         str += '#';
//       }
//     }
//     console.log(str);
//   }
// }

// solution #2 recursive solution

// function pyramid(n, row = 0, str = '') {
// 	if (n === row) {
// 		return;
// 	}

// 	let maxCol = n * 2 - 1;
// 	if (str.length === maxCol) {
// 		console.log(str);
// 		return pyramid(n, row + 1);
// 	}

// 	let sideSpace = n - row - 1;
// 	if (str.length < sideSpace || str.length >= maxCol - sideSpace) {
// 		pyramid(n, row, str + ' ');
// 	} else {
// 		pyramid(n, row, str + '#');
// 	}
// }

// solution #3 - iterative with midpoint

// function pyramid(n) {
// 	const midpoint = Math.floor((n * 2 - 1) / 2);
// 	for (let row = 0; row < n; row++) {
// 		let str = '';
// 		for (let col = 0; col < n * 2 - 1; col++) {
// 			if (col >= midpoint - row && col <= midpoint + row) {
// 				str += '#';
// 			} else {
// 				str += ' ';
// 			}
// 		}
// 		console.log(str);
// 	}
// }

// solution #4 - recursive with midpoint

function pyramid(n, row = 0, str = '') {
  const midpoint = Math.floor((n * 2 - 1) / 2);
  
  if (row === n) {
    return;
  }

  if (str.length === n * 2 - 1) {
    console.log(str);
    return pyramid(n,row + 1);
  }

  if (str.length >= midpoint - row && str.length <= midpoint + row) {
    str += '#';
  } else {
    str += ' ';
  }

  pyramid(n, row, str);
}

module.exports = pyramid;
