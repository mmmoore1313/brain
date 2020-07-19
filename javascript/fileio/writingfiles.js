const fs = require('fs');
const json = require('./written.json');
const record = {
  id: 3,
  name: "Matt",
  age: 21,
  language: ["ruby"]
}

json.data.push(record);
let updata =  JSON.stringify(json);
fs.writeFileSync('./written.json', updata);
console.log(json.data);
