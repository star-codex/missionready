// recursively divides the arrray into halves
function mergeSort(arr) {
	if (arr.length < 2) {
		return arr;
	}
	const mid = Math.floor(arr.length / 2);
	const leftArr = arr.slice(0, mid);
	const rightArr = arr.slice(mid);
	return merge(mergeSort(leftArr), mergeSort(rightArr));
}

// merges the arrays together
function merge(leftArr, rightArr) {
	const sortedArr = [];
	while (leftArr.length && rightArr.length) {
		if (leftArr[0] <= rightArr[0]) {
			sortedArr.push(leftArr.shift());
		} else {
			sortedArr.push(rightArr.shift());
		}
	}
	const resultArr = [...sortedArr, ...leftArr, ...rightArr];
	return resultArr;
}

const arr = [857, 431, 940, 151, 733, 453, 86, 60, 909, 890];
console.log(mergeSort(arr));
