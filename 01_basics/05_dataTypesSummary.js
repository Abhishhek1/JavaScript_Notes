// Primitive

// 7 Types: String, Number, Boolean, null, Undefined, Symbol, BigInt
// JavaScript is dynamcally typed because it does not have to define the variables type.
// Examples
// const score = 100
// const scoreValue = 100.55// integer

// const isLoggedIn = false // boolean
// const temp = null  // null
// let userEmail; // undefined

// const id  = Sybmbol('123') // symbols
// const anotherId  = Sybmbol('123')
// console.log(id == anotherId) // it is not same because it reprsent different symbols

// const bigNumber = 96432544682376838589578n



// Refrence Types (Non-Primitive): 
// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];

// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("hello");
// }

// console.log(typeof bigNumber);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Two types of memmory : 
// 1. Stack(Primitive) => Here we get copy of the value
// 2. Heap (Non-Primitive) => Here we get the refrence of value

let myYoutubeName = "Abhishek"
let secondYoutubeName = myYoutubeName

 console.log(myYoutubeName);
 console.log(secondYoutubeName);

 secondYoutubeName = "Rajput"

 console.log(secondYoutubeName);
 // Here as we all know it is primitive so it will not change the original myYoutube name
 // because it is a stack memory which gives a copy


 let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
 }

 let userTwo = userOne;

 console.log(userOne.email);
 console.log(userTwo.email);

userTwo.email = "abhi37726@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

// here both will change because it is non-primitive and it stores in heap memory

