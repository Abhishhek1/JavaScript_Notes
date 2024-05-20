// some special loop for array specific

// for of loop

// {"", "", ""}
// {{}, {}, {}}

const arr = ["Spiderman", "Batman", "Superman"]

for (const num of arr) {
    console.log(num);
}

const greetings = "Welcome"

for (const greet of greetings) {
    console.log(`Each character ${greet}`);
}


// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

console.log(map)

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject ={
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// } This will not work because object is not itrative with for-of

