//for of 
//["","",""]
//[{},{},{}]

const arr=[1,2,3,4,5]

for (const val of arr){
   console.log(val)
}

const greetings="hello world!"
for(i of greetings){
    console.log(`each character is ${i}`)
}
//maps contains only unique enteries
const map= new Map()
map.set("IN","India")
map.set("US","United states of America")
map.set("FR","France")
console.log(map)

for(const [key,value] of map){ //destructuring of array
    console.log(key,':-',value)
}