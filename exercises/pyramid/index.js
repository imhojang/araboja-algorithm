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

function pyramid(n) {
  for (let row = 0; row < n; row++) {
    let str = '';
    let maxCol = n * 2 - 1;
    let sideSpace = n - row - 1;
    for (let col = 0; col < maxCol; col++) {
      if (col < sideSpace || col >= maxCol - sideSpace) {
        str += ' ';
      } else {
        str += '#';
      }
    }
    console.log(str);
  }
}



module.exports = pyramid;
