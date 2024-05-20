const user = {
    username:"Abhishek",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
    }
}

// this. is used to access from current context

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()


// console.log(this) // as we said earlier that both node and browser act differently here it will return empty but in browser it will return the window
// this is happen because earlier their were no engine to run javascript so in browser it return window but when node came then things changed


function chai(){
    let uername = "abhishek"
    // console.log(this.username);// here this will not used beacuse it is a function in object it will return
}
chai()

const chai2 = () => {
    let username = "abhishek"
    // console.log(this.username) // here also by chnaging way of declaring function but the result will same undefined 
}

// +++++++++++++ ARROW FUNCTION +++++++++++++++++

// this is first type
const addTwo = (num1, num2) =>{
    return console.log(num1 + num2)
}

addTwo(3, 6)

// this is second type
const add = (num3, num4) => (num3 + num4 )// here return not used if you put paranthesis then you to put return 

console.log(add(3,7))

// array type

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(())