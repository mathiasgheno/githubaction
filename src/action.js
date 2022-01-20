const axios = require('axios');

async function main() {
  const response = await axios.get('https://futuramaapi.herokuapp.com/api/characters/dr-zoidberg/1')
  console.log(response.data[0]);
}

main();
