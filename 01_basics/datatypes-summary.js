//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null // type of value 'object' asbe
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n //use to 'n' it autometically convert bigInt dataType




// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++++++++++++++++

//stack (primitive), Heap(Non-Primitive)

let myYoutubename ="codingChallenge"

let anotherName =myYoutubename
anothername ="Utsojet"

console.log(myYoutubename);
console.log(anotherName);

let userone ={
    email: "user@google,com",
    upi: "user@bxjk"
}
let userTwo = userone
userTwo.email="utsojet@gamil.com"
console.log(userone.email);
console.log(userTwo.email);

