// how to declare object as a constructor

const tinderUser = new Object() // Singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"Some@gmail.com",
    fullname:{
        userfullname:{
            firstName: "Abhishek",
            lastName: "Rajput"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },

    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
    {
        id: 4,
        email: "d@gmail.com"
    }
]

// console.log(users[1].email)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Abhishek"
}
// again and again to extract value we have to put course.courseInstructor 
// instead of that we use the below code

// const {courseInstructor} = course // now only courseInstructor can be given to extract value
// console.log(courseInstructor)

// one more method you can also rename and use object values as mentioned below
const {courseInstructor: instructor} = course
console.log(instructor)

