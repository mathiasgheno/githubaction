const axios = require('axios');
const core = require('@actions/core');

async function main() {
  const chars = core.getInput('character') || 'dr-zoidberg';
  const response = await axios.get(`https://futuramaapi.herokuapp.com/api/characters/${chars}/1`);
  console.log(response.data[0]);
}

main();
