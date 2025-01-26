// singleton

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "hotabya",
    "full name": "kumar hotabya",
    [mySym]: "mykey1", 
    age: 22,
    location: "allahabad",
    email: "hotabya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(jsUser["full name"]);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);


jsUser.email = "hotabya@chatgpt.com"
//Object.freeze(jsUser)
jsUser.email = "hotabya@microsoft.com"
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(jsUser.greeting2());
















