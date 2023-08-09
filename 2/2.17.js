// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
//
// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );
//
//
// re-write in arrow functions

if (typeof window === 'undefined') {
  const { confirm, alert } = require("../custompolyfills")
}



const ask = async (question, yes, no) => await confirm(question) ? yes() : no()

ask(
  "Do you Agree",
  () => alert("You agreed."),
  () => alert("Cancelled")
)
