'use strict';
function repeat(fn, n) {
  if (fn === hello) {
    fn(hello(n));
  }
  else if (fn === goodbye) {
    fn(goodbye(n));
  }
  else 
    console.log('There is an error somewhere');
}

function hello(n){
  for (let i=0; i<n; i++){
    console.log('Hello world');
  }
}

function goodbye(n){
  for (let k=0; k<n; k++) {
    console.log('Goodbye world');
  }
}

repeat(hello, 5);
repeat(goodbye, 5);

function hazardWarningCreator (typeOfWarning) {
  let warningCounter = 0;
  return function(location) {
    warningCounter++;
    let message = `Danger! There is a ${typeOfWarning} at ${location} !\n` + 
    `The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`;
    return message;
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
console.log(rocksWarning('Main St and Pacific Ave'));

