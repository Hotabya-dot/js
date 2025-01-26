const accountId = 144553
let accountEmail = "aman@google.com"
var accountPass = "123654789"
accountCity = "allahabad"
let accountState
// accountId = 2
accountEmail = "aman@netflix.com"
accountPass = "1212122"
accountCity = "Bengaluru"
console.log(accountId);

/*
    prefer not to use var because of issue in block scope
    and functional scope
*/

console.table([accountId, accountEmail, accountPass, accountCity, accountState])