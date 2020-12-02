const passwords = require('./puzzleInput')

const matchesRule = (rule, targetLetter, password) => {
  const ruleInts = rule.split('-')
  let indices = []
  indices.push(password[ruleInts[0] - 1])
  indices.push(password[ruleInts[1] - 1])
  const matching = indices.filter(el => el === targetLetter)
  if (matching.length === 1) {
    return true
  } else {
    return false
  }
}

const validatePasswords = (list) => {
  const validPasswords = list.filter(list => {
    const split = list.split(' ')
    const rule = split[0]
    const targetLetter = split[1].split('')[0]
    const password = split[2].split('')
    if (matchesRule(rule, targetLetter, password)) {
      return list
    }
  })
  return validPasswords.length
}



console.log(validatePasswords(passwords))