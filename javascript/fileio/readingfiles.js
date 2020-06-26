var fs = require('fs');

var contents = fs.readFileSync('test.txt', 'utf8');
var numbers = contents.split(',');
numbers.forEach(number => console.log(number));
