// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// solution #1 
function matrix(n) {
	let results = [];

	for (let i = 0; i < n; i++) {
		results.push(Array(n));
	}

	let startRow = 0;
	let endRow = n - 1;
	let startCol = 0;
	let endCol = n - 1;

	let counter = 1;
	let i;
	while (startRow <= endRow && startCol <= endCol) {
		i = startCol;
		while (i <= endCol) {
			results[startRow][i] = counter;
			counter++;
			i++;
		}

		startRow++;

		i = startRow;
		while (i <= endRow) {
			results[i][endCol] = counter;
			counter++;
			i++;
		}

		endCol--;

		i = endCol;
		while (i >= startCol) {
			results[endRow][i] = counter;
			counter++;
			i--;
		}

		endRow--;

		i = endRow;
		while (i >= startRow) {
			results[i][startCol] = counter;
			counter++;
			i--;
		}

		startCol++;
	}

	return results;
}

/*
    CREATE counter variable  

    AS LONG AS start_row is less than end_row AND 
    start_col is less than to end_col
      
      while i !== endCol
        - fill in [startRow][i]
        - increment count
      
      INCREMENT startRow

      while i !== endRow
        - fill in [i][endCol]
        - increment count

      DECREMENT endCol

      while i !== startCol
        - fill in [endRow][i]
        - increment count

      DECREMENT endRow
      
       while i !== startRow
        - fill in [i][startCol]
        - incrementCount

      INCREMENT startCol
}
*/

module.exports = matrix;
