const accountId =2197160  //cannot be changed
let accountEmail ="test@gmail.com"
var accountPassword="12345"
accountCity="Bettiah" //not recommended but can be done

let accountState; //semicolon is not compulsory(as we have niot assigned any value to variable by default it will be unassigned)


//we are not using var due to problem in scope determination

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity])
