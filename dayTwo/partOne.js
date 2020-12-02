const passwords = require('./puzzleInput')

const matchesRule = (rule, letters) => {
  const ruleInts = rule.split('-')
  letters.length >= ruleInts[0] && letters.length <= ruleInts[1] ? true : false
    return true
}

const isValidPassword = (rule, targetLetter, password) => {
  const matchingLetters = password.filter(letter => letter === targetLetter)
  matchingLetters.length === 0 ? matchesRule(rule, matchingLetters) : false
}

const validatePasswords = (passwordList) => {
  const validPasswords = passwordList.filter(listItem => {
    const split = listItem.split(' ')
    const rule = split[0]
    const targetLetter = split[1].split('')[0]
    const password = split[2].split('')
    if (isValidPassword(rule, targetLetter, password)) {
      return listItem
    }
  })
  return validPasswords.length
}

console.log(validatePasswords(passwords))