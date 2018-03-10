'use strict';

const testArray = [1, 2, 3, 4];

// (testArray[0]);

// for (let i = 0; i < testArray.length; i++) {
//   console.log(testArray[i]);
// }

//

const newArray = [];

testArray.forEach(function(element) {
  const result = element + 1;
  newArray.push(result);
  console.log(result);
});

console.log(newArray);

testArray.forEach(function(element) {
    console.log(`${element} is super Kewl`);


// Same thing as above and add return new array//

const newerArray = testArray.map(function(elem) {
  return elem + 1;
});
console.log(newerArray);
