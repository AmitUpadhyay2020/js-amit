score="23"  // double quotes and hence it's a string
/*const {formScore}=Req.body
this is how we get the value filled in form*/
console.log(typeof(score))

let valueInNumber= Number(score) //for conversion we use caps
console.log(typeof(valueInNumber))

myScore="23abc"
myScoreInNumber=Number(myScore)  //javascript converts non no value to string but produces output as NaN
console.log(typeof(myScoreInNumber))  
console.log(myScoreInNumber)

//null value is 0 if converted to NaN
//undefined to NaN
str1="hello"
str2=" Amit"
str3=str1+str2
console.log(str3)


//some important patterns
console.log("1"+2)    //12
console.log(1+"2")    //12
console.log("1"+"2")  //12
console.log("1"+2+2)  //122
console.log(1+2+"2") //132
