// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// solution #1
/*
function chunk(array, size) {
	let chunks = [];
	let collection = [];

	for (let i = 0; i < array.length; i++) {
		chunks.push(array[i]);

		if ((i + 1) % size === 0) {
			collection.push(chunks);
			chunks = [];
		} else if (i === array.length - 1) {
			collection.push(chunks);
		}
	}

	return collection;
}
*/

// solution #2

/*
function chunk(array, size) {
	const chunked = [];

	for (let element of array) {
		const last = chunked[chunked.length - 1];

		if (!last || last.length === size) {
			chunked.push([element]);
		} else {
			last.push(element);
		}
	}

	return chunked;
}
*/

// solution #3 - array.slice

function chunk(array, size) {
	let chunked = [];
	for (let i = 0; i < array.length; i += size) {
		const slice = array.slice(i, i + size);
		chunked.push(slice);
	}
	return chunked;
}

// chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);

module.exports = chunk;
