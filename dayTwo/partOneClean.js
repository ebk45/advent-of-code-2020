const passwords = require('./puzzleInput')

const matchesRule = (rule, letters) => {
  return letters.length >= rule.split('-')[0] && letters.length <= rule.split('-')[1]
}

const isValidPassword = (rule, targetLetter, password) => {
  const matchingLetters = password.split("").filter(letter => letter === targetLetter)
  if (matchingLetters.length !== 0) return matchesRule(rule, matchingLetters)
}

const validatePasswords = (list) => {
  const validPasswords = list.filter(item => {
    const [rule, letter, password] = item.replace(":", "").split(' ')
    if (isValidPassword(rule, letter, password)) return item
  })
  return validPasswords.length
}

console.log(validatePasswords(passwords))