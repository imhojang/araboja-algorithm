// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// solution # 1 

/*
function steps(n) {
  let stepsArr = [];

  for (let i = 1; i < n + 1; i++) {
    let pounds = '';
    for (let j = 0; j < i; j++) {
      pounds += '#';
    } 
    stepsArr.push(pounds);
  }

  let spaces = ''
  for (let i = 0; i < n - 1; i++) {
    spaces += ' ';
  }

  stepsArr.forEach((val, idx) => {
    step = val + spaces.slice(idx);
    console.log(step);
  })
}
*/

// solution #2 - thinking of it as a matrix

function steps(n) {
  for (let row = 0; row < n; row++) {
    let step = '';
    for (let col = 0; col < n; col++) {
      if (row >= col) {
        step += '#'
      } else {
        step += ' '
      }
    }
    console.log(step);
  }
}

module.exports = steps;
