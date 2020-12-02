const expenses = require('./puzzleInput')

const target = 2020

const threeSum = (target, expenses) => {
  let result = [];

  for (var i = 0; i < expenses.length; i++) {
    for (var j = i + 1; j < expenses.length; j++) {
      for (var k = i + 1; k < expenses.length; k++) {
        if (expenses[i] + expenses[j] + expenses[k] === target) {
          result.push(i);
          result.push(j);
          result.push(k);
        }
      }
    }
  }
  return expenses[result[0]]*expenses[result[1]]*expenses[result[2]];
}

console.log(threeSum(target, expenses))