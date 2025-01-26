const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

//marvel.push(dc)

// console.log(marvel);
// console.log(marvel[3][2]);

const newHeros = marvel.concat(dc)
// console.log(newHeros); 

const all_heros = [...marvel, ...dc] // spread

//console.log(all_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [5, 6, [7, 9]]]

const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array);


console.log(Array.isArray("hotabya"));
console.log(Array.from("Hotabya"));
console.log(Array.from({name: "hotabya"})); // interesting case
 
let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1, s2, s3));










