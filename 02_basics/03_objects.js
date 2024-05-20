// two ways of declaration of objects : literals, constructor

// Singleton

// object literals

// Object.create => this is how from constructor a object made

const mySym = Symbol("Key1")

const jsUser = {
    name: "Abhishek",
    [mySym]: "Key2", 
    age: 21,
    location: "Ahmedabad",
    email: "abhi37726@gmail.com",
    isLoggedIn: false,
    lastLogginDays: ["Monday", "Saturday"]
}

console.log(typeof jsUser[mySym]);

jsUser.email = "abhishek@google.com"

console.log(jsUser);

// Object.freeze(jsUser)

jsUser.email = "abhishek@okaxis"
console.log(jsUser);


// Adding a function in a object:

jsUser.greeting = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsUser.greeting());

