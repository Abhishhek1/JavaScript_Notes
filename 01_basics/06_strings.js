const name = "Abhishek"
const repoCount = 4

// console.log(name + " repocount is " + repoCount + " in total"); 
// this type should not be used in modern era so should be avoided


//Instead of that use this :

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('min-militia')

console.log(gameName[0]);
console.log(gameName.length);

console.log(gameName.indexOf('t'));
console.log(gameName.charAt(3));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 5);
console.log(anotherString);

const newStringOne = "   abhi   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://www.abhishek%20.com"
console.log(url.replace('%20', ''))


