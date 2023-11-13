//arrays

const myArr=[0,1,2,3,4,5,true,"Amit"]
console.log(myArr[0])

//shallow copies share the same reference
//deep copies do not share the same reference

const myHeros=["Captain America","Spiderman"]
const myArr2= new Array(1,2,3,4)

//array methods
myArr.push(6) //insertion element at the end of the array
myArr.pop()// no argument needed reomoves the last value
console.log(myArr)
myArr.unshift(9)
myArr.shift() //remove the first element of the array


console.log(myArr.includes(9))
console.log(myArr.indexOf(9)) // if not present returns -1

const newArr=myArr.join()  //converts the array to the string
console.log(newArr)
console.log(typeof newArr)


// slice splice

const exArr=[0,1,2,3,4,5]
console.log("A",exArr)
const myN1=exArr.slice(1,3) //from range-1
console.log(myN1)
console.log("B",exArr)
const myN2=exArr.splice(1,3)//till range and also manipulates the orignal array
console.log("C",exArr)
console.log(myN2)