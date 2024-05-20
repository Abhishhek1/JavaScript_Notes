// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})(); // this is iife


// iife in arrow function

(() => {
    console.log(`DB CONNECTED 2 ${name}`);
})('abhishek')

