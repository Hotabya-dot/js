function name() {
    console.log("H");
    console.log("o");
    console.log("t");
    console.log("a");
    console.log("b");
    console.log("y");
    console.log("a"); 
}

name

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){
    //let result = number1 + number2
    return number1 + number2
}

const result = addTwoNumbers(7, 9)
//console.log("result: ", result);

 
function loginUserMessage (username = "sam"){
    if (!username) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("hotabya"));














