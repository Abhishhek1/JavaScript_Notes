

if(true){
let a = 10
const b = 20
var c = 30
}

// console.log(a); // This will not run so it is good because declaration made in the if statement should not be outside that
// console.log(b); // Same
// console.log(c); // but this will run and consider outside of if statement so it is bad for developer if another person declare same name variable the it will create problem

// This is called block scope and global scope
// let and const are block scope and var is a global scope

// both environment and browser's console have different scopes ==> IMP for interview

function one(){
    const username = "Abhi"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console,log(website);
    two()
}

// one()

if(true){
    const username = "abhishek"
    if(username==="abhishek"){
        const website = "abhishek.com"
        console.log(username + website);
    }
}

// ++++++++++++++++++++  Interseting  +++++++++++++++++

function addOne(num){ //1
    return num +1
}

console.log(addOne(5))

const addTwo = function(num){ //2
    return + 2
}
addTwo(5)


// Notes: two types of declaring function above two 2 one was also called expression but the difference between both is that in first one
//        if you call him before the fuction written therefore it will exectued but in 2one expression said it will thow error.


