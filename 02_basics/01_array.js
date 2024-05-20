 /*
 => Array is an object and it can be increased so it is not fixed
=>  And it can be a combination of numbers and strings
=>  Zero Indexing
=>  It is a shallow copy which means it share the same refrence which means 
    if i change copy then the original will also be changed

 */

const myArr = [0, 1, 2, 3, 4]
const myHeros = ["Shaktiman", "Naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1])

// Array Methods:

// myArr.push(6)
// myArr.push(7)

// console.log(myArr); // here 6 and 7 would be pushed in the myArr array

// myArr.pop()
// console.log(myArr); // here from the pop function last element would be removed

myArr.unshift(0)
// console.log(myArr); // unshift add element in the starting

myArr.shift()
// console.log(myArr); // shift function delete the eelement from the starting


// console.log(myArr.includes(7));// it checks wheteher this array includes 7 number or not
// console.log(myArr.includes(3));// same and give answer in boolean

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// console.log(typeof newArr);

// Slice, Splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B", myArr);// slice will not remove the array and not print the last element

const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C", myArr);// splice will remove the array which are mentioned

