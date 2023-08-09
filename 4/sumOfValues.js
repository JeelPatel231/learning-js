let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

const sum = Object.values(salaries).reduce((p, v) => p + v)
console.log(sum)
