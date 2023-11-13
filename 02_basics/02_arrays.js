//Array can be heterogenous collection of objects

const marvelHeros=["Thor","Ironman","Spiderman"]
const dcHeros=["Superman","Flash","Batman"]

//marvelHeros.push(dcHeros) //insert Array dcHeros as a 4th element
//console.log(marvelHeros)
//console.log(marvelHeros[3][0])

const allHeros=marvelHeros.concat(dcHeros)  //combines both the array and return a new array 
console.log(allHeros)


//Another way to do the same thing as the concatenation is spreading
//Dropping a glass
// Advantage multiple array can be combined

const myHeros=[...marvelHeros,...dcHeros]
console.log(myHeros)

const anotherArray=[1,2,3,4,5,[6,7,8,[9,10,11,12]]]
realAnotherArray=anotherArray.flat(Infinity) //take depth of array as arguement
console.log(realAnotherArray)


//sometimes we need data in form of array to perform some manipulations
//hence we convert it to it 

console.log(Array.isArray("Amit"))
console.log(Array.from("Amit"))  // converting to the array
console.log(Array.from({name:"Amit"})) // will return an empy array as it does not know whether array of key or value which has to be formed

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))// return array from set of elements
