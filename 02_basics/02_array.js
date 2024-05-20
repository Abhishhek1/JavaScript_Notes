const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Batman", "Flash"]

// marvel_heros.push(dc_heros) // it will inject array in the array so it would be arrays of array
// console.log(marvel_heros)

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(marvel_heros)
// console.log(dc_heros)
// console.log(allHeros);

const all_Heros = [...marvel_heros, ...dc_heros]// this is a spread operation easy way to concat both array
console.log(all_Heros);


const anotherArr = [1, 2, 3, [4, 5, 6], 7, [8, [9, 0]]]

const realAnotherArr = anotherArr.flat(Infinity) // flat method spread the data in a single array

console.log(realAnotherArr);


// isArray, from

console.log(Array.isArray("Abhishek"))// here it is asking does it exist so it will return boolean value
console.log(Array.from("Abhishek"))//from method convert string into array

// how to covert set of elements in array
let score1 =100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))