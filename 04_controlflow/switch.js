// switch(key){
//     case value: 
        
//         break;
//     default:
//         break;
// }

const month=3

switch (month) {
    case 1: console.log("january")
        
        break;
    case 2: console.log("february")
        
        break;
    case 3: console.log("march")
        
        break;
    case "december": console.log("december")  //case sensitive
        
        break;


    default: console.log("not possible")
        break;
}


// truthy values: rest all "0" 'false' " " [] {} function(){}
// falsy values:  0 -0 false BigInt i.e 0N "" null undefined NaN

const myArray=[]
if(myArray.length==0){
    console.log("Array is empty")
}
const myObj={}
if(Object.keys(myObj).length===0){
    console.log("Object is empty")
}

let val1
//null coalescing operator for safety check for null and undefined
val1= null ?? 10
//val1= undefined ?? 10
//val1= 1 ?? 10
console.log(val1)

// ternary operator
//condition ? true: false
const iceTeaPrice=100
iceTeaPrice>=80 ? console.log("more than 80"):console.log("greater than 80")