const name ="Amit"
const repoCount =50

// console.log(name+repoCount+"value")
//nowadays this syntax is not in use

// console.log('my name is ${name} and i have ${repoCount} repositories on Github')

const gameName= new String('Amit-Upadhyay')
console.log(gameName)
console.log(gameName.length)
console.log(gameName[0])
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

newString=gameName.substring(0,4)
console.log(newString)
anotherString=gameName.slice(-8,4)
console.log(anotherString)


const newStringOne="    Amit Kumar Upadhyay    "
console.log(newStringOne)
console.log(newStringOne.trim())//only removes starting and backspaces

const url="https://www.amit.com/amit%20upadhyay"
console.log(url.replace('%20','-'))
console.log(url.includes("amit"))

const getName="Amit-Kumar-Upadhyay"
console.log(getName.split("-"))
