//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const user = {
    fullname: {
        userfullname: {
            firstname : "kumar",
            middlename: "hotabya",
            surname: "patel"
        }
    }
}

//console.log(user.fullname.userfullname.surname );

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({} ,obj1, obj2)

const obj3 = {...obj1, ...obj2}    // spread


//console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@google.com"
    },
    {
        id: 2,
        email: "g.google.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "js in hindi",
    fees: "999",
    instructor: "hitesh"
}
 
const {instructor: tea} = course

console.log(tea);

