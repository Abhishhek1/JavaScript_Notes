const myObject ={
    js: 'JavaScript',
    cpp: 'c++',
    rb: 'Ruby',
    swift: 'Swift by Apple'
}

for (const key in myObject) {
    console.log(`${key} value is ${myObject[key]}`)
}

// For the objects we use for-in because there for-of didnt work

// for-each loop

const coding = ["js", "ruby", "c++", "java", "python"]

coding.forEach(element => {
    console.log(element)
});

const codingLanguage = [
    {
        languageName: "Python",
        fileName: "py"
    },
    {
        languageName: "JavaScript",
        fileName: "js"
    },
    {
        languageName: "java",
        fileName: "java"
    }
]

codingLanguage.forEach(element => {
    console.log(element.languageName)
});