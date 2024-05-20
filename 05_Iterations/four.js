// filter method 

const myNums = [1, 2, 3, 4, 5, 6, 7]

const newNum = myNums.filter( (num) => {
    return num>4
} )

// console.log(newNum)

const yourNum = [1, 2 ,3 ,4 ,5 ,6, 7, 8]

const newestNum = []
yourNum.forEach( (num) =>{
    if(num>4){
        return newestNum.push(num)
    }
} )

// console.log(newestNum)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const books = [
    {
        title:"book1", publish:"1992"
    },

    {
        title:"book2", publish:"1980"
    },

    {
        title:"book3", publish:"1976"
    },

    {
        title:"book4", publish:"1999"
    },

    {
        title:"book5", publish:"1997"
    }
]

const userBooks = books.filter( (bk) => bk.title === "book5" )

console.log(userBooks)