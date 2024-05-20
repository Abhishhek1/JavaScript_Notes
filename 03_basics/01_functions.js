
function sayMyName(){
console.log("A");
console.log("B");
console.log("H");
console.log("I");
}

// sayMyName()

function addTwoNumber(number1, number2){
    return number1 + number2
}

addTwoNumber(3, 6)

const  result = addTwoNumber(4,8)
// console.log(result);

function loginUserMessage(username){
    if(username === undefined){
        console.log(`please Enter a user name`)
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("abhishek"))

function calculateCarPrice(...num1){
    return num1
}

// console.log(calculateCarPrice(200, 400, 500))

const user = {
    username:"Abhishek",
    Age:21
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.Age}`);
}

handleObject(user)

// pass array in function
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

