//for
for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element)
 //printing numbers from 0 to 9   
}


for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    console.log(i + '*' + j + ' = ' + i*j );
   }
    
}

let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//         continue 1 bar ke liye maaf kar deta hai
//     }
//    console.log(`Value of i is ${index}`);
    
// }