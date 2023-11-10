/*data type are divided into two parts on the basis of they are kept and accessed from the memory*/

/* Primitive:  call by value
        #1 String
        #2 Number
        #3 Boolean
        #4 null  typeof-object
        #5 undefined  :if we only declare and do not assign any value
        #6 Symbol :used to provide uniqueness to the component
        #7 BigInt: 12345657891229n
        
    Non-Primitive: by reference
        #1 Array
        #2 Objects typeof function
        #3 Functions
*/

//Javascript is a dynamically typed language


//Example for Symbol
const id=Symbol("123")
const anotherID=Symbol("123")
console.log(id===anotherID)


const hero=["sita","ram","hanuman","laxman"]
let myOBj={
  name: "Amit",
  age:22,
}

const myFunction= function(){
    console.log();
}
