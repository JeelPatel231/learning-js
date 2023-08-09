if (typeof window === 'undefined') {
  var { alert, prompt } = require('../custompolyfills')
}

// show the sign

async function showTheSign() {
  const numberInput = parseInt(await prompt("input a number : "))

  if (numberInput > 0) {
    alert(1)
  } else if (numberInput < 1) {
    alert(-1)
  } else {
    alert(0)
  }
}

async function reWriteIntoTernary() {
  /*
   * let result;
   * if (a + b < 4) {
   *    result = 'Below';
   * } else {
   *    result = 'Over';
   * }
   * */

  let a = 1, b = 3;
  const result = (a + b < 4) ? "Below" : "Over"
  alert(result)
}


async function reWriteIntoTernary2() {
  // let message;
  //
  // if (login == 'Employee') {
  //   message = 'Hello';
  // } else if (login == 'Director') {
  //   message = 'Greetings';
  // } else if (login == '') {
  //   message = 'No login';
  // } else {
  //   message = '';
  // }

  let login = ''
  const message = (login == 'Employee') ? 'Hello'
    : (login == 'Director') ? 'Greetings'
      : (login == '') ? 'No Login' : ''

  console.log(message)

}

(async () => {
  await showTheSign()
  await reWriteIntoTernary()
  await reWriteIntoTernary2()
})()
