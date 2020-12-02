const expenses = require('./puzzleInput')

const target = 2020

const sumExpenses = (target, expenses) => {
  let result = [];

	for (var i = 0; i < expenses.length; i++) {
		for (var j = i + 1; j < expenses.length; j++) {
			if (expenses[i] + expenses[j] === target) {
				result.push(i);
				result.push(j);
			}
		}
	}
	return expenses[result[0]]*expenses[result[1]];
}

console.log(sumExpenses(target, expenses))