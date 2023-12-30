//for of

["","",""]
[{},{},{}]

const arr=[1,2,3,4,5]

for (const val of arr) {
    console.log(val);
    
}
const greetings="Hello World!"
for (const val of greetings){
    if(val==" " ||val=="!")
    continue;

console.log(`Each charchter is ${val}`);

}



//Maps

/* The Map object holds key-value pairs and remembers the original insertion order of the keys.
 Any value (both objects and primitive values) may be used as either a key or a value.*/

 //unique value can be only entered in map

const myMap= new Map()
myMap.set('IN',"India")
myMap.set('FR',"France")
myMap.set('USA',"United States of America")
console.log(myMap)


for(const val of myMap){
    console.log(val);
}

for(const [key,val] of myMap){
    console.log(key+":-"+val);
}

const myObject={
    'game1':"NFS",
    'game2':"Spiderman",
    'game3':"GTA5",
    'game4':"Max Pyane",
    'game5':"Desert Strome"
}
//cannot iterate object using forof loop

//forin

for (const key in myObject) {
    console.log(key); //this will print keys
    console.log(myObject[key]); //this will print values
    console.log(`${key} is for ${myObject[key]}`);
}

const programming=["C++","Java","Python","C#"]

for(const key in programming){
    console.log(programming[key]);
}
programming.forEach(function(val){
    console.log(val)

})

//it access to parameter like index,item and array
programming.forEach((item,index,programming) =>{
    console.log(item)

})

function printMe(item){
    console.log(item)
}
programming.forEach(printMe)