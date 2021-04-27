const API = require('..');

const api = new API({
  apiKey: 'YOUR_API_KEY'
});

api.getUserData('POTENTIAL_STEAM_ID')
  .then(v => console.log(v)) 
  .catch(err => console.log(err))