if (typeof window === 'undefined') {
  var { alert, prompt } = require('../custompolyfills')
}

async function outputEvenNumbers(a, b) {
  for (let i = a; i <= b; i++) {
    if (!(i % 2)) {
      alert(i)
    }
  }
}

async function greaterThan1000() {
  while (1) {
    const input = parseInt(await prompt("input number > 1000 ? : "))

    if (input >= 1000) break;
  }
}

// generator functions ;)
function* outputPrimeNumbers() {
  let primes = []
  let i = 2;
  while (1) {
    let isPrime = true;
    for (const p of primes) {
      if (i % p === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(i)
      yield i
    }

    i++;
  }
}

(async () => {
  await outputEvenNumbers(2, 10)
  await greaterThan1000()

  let gen = outputPrimeNumbers() // infinite list of prime numbers
  // log all prime numbers
  for (const v of gen) {
    console.log(v)
    // if you remove this break
    // it will keep printing the infinite list forever
    if (v > 100) break;
  }
})()
