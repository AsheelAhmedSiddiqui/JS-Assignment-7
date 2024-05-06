"use strict";
/* Write a JavaScript program to check whether a given positive number is a
multiple of 3 or 7. */
let postiveNum = [1,2,3,4,5,6,7,8,9];
for (let i = 0; i < postiveNum.length; i++) {
  if(postiveNum[i] % 3 === 0 || postiveNum[i] % 7 === 0){
    console.log(postiveNum[i]);
  }
}