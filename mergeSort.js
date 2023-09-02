function mergeSort(arr) {
	// divide the arrays until length is one
	if (arr.length < 2) {
		return arr;
	}
	// divide the array in the middle
	const mid = Math.floor(arr.length / 2);
	// all elements up to but not including the middle element
	const leftArr = arr.slice(0, mid);
	// all elements from the middle to the end of the array
	const rightArr = arr.slice(mid);

	// recursion until array has been sorted
	return merge(mergeSort(leftArr), mergeSort(rightArr));
}

// merges the arrays together
function merge(leftArr, rightArr) {
	// temporary array to hold the sorted elements
	const sortedArr = [];
	// check that both arrays are not empty
	while (leftArr.length && rightArr.length) {
		// compare first element in the two arrays
		// push the smallest element onto the sorted array
		// use shift so the element is removed
		if (leftArr[0] <= rightArr[0]) {
			sortedArr.push(leftArr.shift());
		} else {
			sortedArr.push(rightArr.shift());
		}
	}

	// use spread syntax to concatenate the arrays into one
	const resultArr = [...sortedArr, ...leftArr, ...rightArr];
	return resultArr;
}

const arr = [857, 431, 940, 151, 733, 453, 86, 60, 909, 890];
console.log(mergeSort(arr));
