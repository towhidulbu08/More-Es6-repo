const numbers=[2,8,4,6,3,5]
//const doubleIt= num =>num*2;
const makeDouble=numbers.map(num =>num+10)
let makeDouble2=numbers.forEach(num => console.log(num+10))
const fiveTimes=[3,2,4,5,3,5].map(a=> a-a)
//console.log(fiveTimes);
console.log(makeDouble2);

//console.log(makeDouble,makeDoubleDirect,fiveTimes)
//1.map:only apply on an array and return  an array.
//2.filter: only apply on an array and return an array that satisfy certain condition.
//3.find:only apply on an array and return the first element of an array that satisfy the certain condition