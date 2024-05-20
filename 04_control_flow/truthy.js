const userEmail = "h@abhishek.ai"

if(userEmail){
    console.log("User logged in");
}
else{
    console.log("User dont have email");
}


// Falsy Value : 
// false, 0, -0, BigInt, "", null, undefined. NaN

// truthy values
// "0"

if (userEmail.length == 0) {
    
}

//Nullish Coalesing Operator (???): null undefined
let val;
val1 = 5 ?? 10 

console.log(val1);

// Ternery Operator
// consition ? true : false

const iceTeaPrice = 100

iceTeaPrice >=80 ? console.log("true") : console.log("false");


