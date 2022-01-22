const axios = require('axios');
const core = require('@actions/core');

const VALID = [
  'bender',
  'fry',
  'leela',
  'dr-zoidberg',
]

function checkValidChar(char) {
  if(!VALID.includes(char)) {
    core.setFailed(`Unknown character ${char}`);
  }
}

async function main() {
  const chars = core.getInput('character') || 'dr-zoidberg';
  checkValidChar(chars);
  const response = await axios.get(`https://futuramaapi.herokuapp.com/api/characters/${chars}/1`);
  console.log(response.data[0]);
  core.setOutput('quote', `${response.data[0].quote}`);
}

main();
