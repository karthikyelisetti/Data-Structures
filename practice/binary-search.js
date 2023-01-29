// Binary search
function binarySearch(arr, num) {
  var start = 0;
  var end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    let middleValue = arr[mid];

    if (num === middleValue) {
      return true;
    } else if (num < middleValue) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
}

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr = [1,2,7,8,22,28,41,58,67,71,94];
num = 7;
console.log(binarySearch(arr, num));


