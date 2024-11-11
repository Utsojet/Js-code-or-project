const accountId =12345
let accountEmail = "hitesh@google.com"
var accountPassword = "123455"
accountCity = "jaipur"
let accountState;

//accountId =2 //not allowed

accountEmail ="hc@hc.com"
accountPssword ="21231323"
accountCity ="Bengaluru"
console.log(accountId);

/*
prefer not to use var because of issue in block scope and functional scope 
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])