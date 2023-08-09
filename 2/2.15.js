if (typeof window === 'undefined') {
  var { confirm } = require('../custompolyfills')
}

// rewrite with ||
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }
async function checkAge(age) {
  return (age > 18) || await confirm('Did parents allow you?')
}

const min = async (a, b) => a < b ? a : b
const pow = async (a, b) => a ** b;

const pow2 = async (a, b) => {
  let res = a
  while (--b) {
    res *= a
  }
  return res
}

const pow3 = async (a, b) => b === 1 ? 1 : a * await pow(a, b - 1);

(async () => {
  console.log(await checkAge(20))
  console.log(await min(10, 8))
  console.log(await pow(9, 5))
  console.log(await pow2(9, 5))
  console.log(await pow3(9, 5))
})()


