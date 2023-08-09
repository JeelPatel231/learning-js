const readline = require('node:readline/promises');
const process = require('node:process');

const alert = console.log;

const prompt = async (str) => {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const answer = await rl.question(str);
  rl.close();
  return answer;
}

const confirm = async (str) =>
  ['y', 'yes'].includes((await prompt(`${str} [y/N] : `)).toLowerCase())


module.exports = {
  alert: alert,
  prompt: prompt,
  confirm: confirm,
}
