const findSecondLargestNumber = function (arr) {
  let largestNumber = 0;
  let secondLargesNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    if (largestNumber < arr[i]) {
      secondLargesNumber = largestNumber;
      largestNumber = arr[i];
    } else if (secondLargesNumber < arr[i] && largestNumber > arr[i]) {
      secondLargesNumber = arr[i];
    }
  }

  if (arr.length === 0 || !Array.isArray(arr)) {
    throw new Error("Invalid");
  }

  return secondLargesNumber ? secondLargesNumber : null;
};

console.log(findSecondLargestNumber([3, 3, 2, 7, 8, 7, 2, 1]));
console.log(findSecondLargestNumber([3, 3, 3, 3]));
console.log(findSecondLargestNumber(1));
