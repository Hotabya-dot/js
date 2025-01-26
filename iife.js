// immediately invoked function expressions (IIFE)


(function chai(){
    //names iife
    console.log(`DB CONNECTED`);
})();

(() => {
    console.log(`DB CONNECTED AGAIN`);
})();

((name) => {
    console.log(`DB CONNECTED AGAIN ${name}`);
})('hotabya')
