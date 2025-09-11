function recursiveSum(arr: number[], index = 0) {
  if (index === arr.length) return 0;
  return arr[index] + recursiveSum(arr, index + 1);
}

console.log(recursiveSum([1, 2, 3, 4, 5, 6, 7]));
