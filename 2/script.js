"use strict";
// Single line comment

if (typeof window === 'undefined') {
  var { alert, prompt, confirm } = require('../custompolyfills/index')
}


async function main() {
  /*
   * Multiline 
   * Comment
  */
  alert("Hello from external script!")

  // var, let, const

  var a = 10;
  var a = 20; // no error

  let b = 10;
  // let b = 20; // throws error


  const c = 100;
  // const c = 120; // error, cant redeclare
  // c = 500; // error, cant reassign


  /*
   * 2.4 Task
   *
   * Declare two variables: admin and name.
   * Assign the value "John" to name.
   * Copy the value from name to admin.
   * Show the value of admin using alert (must output “John”).
   * */

  let name = "John";
  let admin = name;

  alert(admin)

  // 2.5, data types

  typeof undefined      // "undefined"
  typeof 0              // "number"
  typeof 10n            // "bigint"
  typeof true           // "boolean"
  typeof "foo"          // "string"
  typeof Symbol("id")   // "symbol"
  typeof Math           // "object"  (1)
  typeof null           // "object"  (2)
  typeof alert          // "function"  (3)

  // string literals
  console.log(`hello ${1}`);      // hello 1
  console.log(`hello ${"name"}`); // hello name
  console.log(`hello ${name}`);   // hello John


  const promptedName = await prompt("what is your name name?")
  console.log(promptedName)

  const confirmName = await confirm(`Is the name ${promptedName} correct?`)
  console.log(confirmName)


  let age = parseInt(await prompt('How old are you?', ''));

  let accessAllowed = false;
  // if else demo, could surely be written as 
  // const accessAllowed = age >= 18
  if (age >= 18) {
    accessAllowed = true;
  }

  alert(accessAllowed);


  // short circuiting in logical operations
  const _true = () => { console.log("true"); return true }
  const _false = () => { console.log("false"); return false }


  _true() && _true()    // both true gets executed
  _false() && _true()   // first ONLY gets executed
  _true() || _true()    // first ONLY gets executed
  _false() || _false()  // both false gets executed

  if (!!0) { // boolean conversion by not operation
    console.log("nope, doesnt get logged")
  }

  let j; // but its undefined
  let k = null;

  let fallbacked = j /* skipped because undefined */
    ?? k /* skipped because null */
    ?? "fallback" /* used because valid and defined */
  console.log(fallbacked)


  // arrow functions
  const arrowFunc = () => {
    console.log(`can't do ${this} >:)`)
  }
  arrowFunc()

}

main()
