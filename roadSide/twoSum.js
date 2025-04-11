const twoSum = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [array[i], array[j]]
      }
    }
  }
}

console.log(twoSum([2, 7, 9, 11], 20));
