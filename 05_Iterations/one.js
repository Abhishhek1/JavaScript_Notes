// for

for (let i = 1; i <= 10; i++) {
    console.log(`Table of ${i}`);
    for (let j = 1; j <= 10; j++) {
        const element = [i*j];
        console.log(`${i} * ${j} = ${element}`)
    }
    
}

 // while

 let i =0;
while (i<10) {
    console.log(i);

    i++;
}

let myArr = ["batman", "spiderman", "superman"]

let j = 0;
while(j<myArr.length){
    console.log(myArr[j]);
    j++;
}


// do while

let k =11;
do {
    console.log(myArr[k]);
    k++;
} while (k<myArr.length);