const passwords = require('./puzzleInput')

const matchesRule = (rule, letters) => {
  const ruleInts = rule.split('-')
  if (letters.length >= ruleInts[0] && letters.length <= ruleInts[1]) {
    return true
  } else {
    return false
  }
}

const isValidPassword = (rule, targetLetter, password) => {
  const matchingLetters = password.filter(letter => letter === targetLetter)
  if (matchingLetters.length === 0) {
    return false
  } else {
    return matchesRule(rule, matchingLetters)
  }
}

const validatePasswords = (list) => {
  const validPasswords = list.filter(list => {
    const split = list.split(' ')
    const rule = split[0]
    const targetLetter = split[1].split('')[0]
    const password = split[2].split('')
    if (isValidPassword(rule, targetLetter, password)) {
      return list
    }
  })
  return validPasswords.length
}

const validatePasswords = (list) => {
  const validPasswords = list.filter(list => {
    const split = list.split(' ')
    const rule = split[0]
    const targetLetter = split[1].split('')[0]
    const password = split[2].split('')
    if (isValidPassword(rule, targetLetter, password)) {
      return list
    }
  })
  return validPasswords.length
}

console.log(validatePasswords(passwords))