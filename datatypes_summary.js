// primitive

// 7 string : string, number, boolean, null, undefined, symbol, bigint


// reference (non primitive)

// array, objects, functions



// const id = Symbol("123")
// const anotherId = Symbol("123")
// console.log(id === anotherId);

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunct = function(){
    console.log("Hello");
}

//console.log(typeof myFunct);

// +++++++++++++++++++++++++++++++++++++++


// stack(primitive), heap(non-primitive)

let myName = "hitesh"

let anotherName = myName
anotherName = "aman"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "aman@google.com"

console.log(userOne.email);
console.log(userTwo.email);







