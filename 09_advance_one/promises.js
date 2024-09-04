// this is a promise generally we dont make promise we get promise from api
// this are the promises i will be using

function asyncFunc1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("some data1")
            resolve("Sucess")
        }, 4000)
    })
}
function asyncFunc2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("some data2")
            resolve("Sucess")
        }, 4000)
    })
}

function getData(dataId){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log("data", dataId)
            resolve("sucess")
        }, 1000)
    })
}



// how to use promise using then
// chaining in promise
// 1st way of chaining
// asyncFunc1().then((res)=>{
//     console.log(res);
//     asyncFunc2().then((res)=>{
//         console.log(res)
//     })
// })

// 2nd way and easier way thats why use chaining in promise instaed of call back heal
getData(1)
.then(()=>{
    return getData(2)
})
.then(()=>{
    return getData(3) 
})
.then(()=>{
    return getData(4) 
})
.then(()=>{
    return getData(5) 
})
.then((res)=>{
    console.log(res)
})
// this is how chaining works.




// Async Await
//note: So async await make it more easier rather than using then use await
// and await never run in normal function it need a aync function to run it
// For example

async function main(){
    await getData(1)
    await getData(2)
    await getData(3)
    await getData(4)

}
main()