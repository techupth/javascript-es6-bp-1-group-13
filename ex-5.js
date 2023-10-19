function sum(...x) {
  let y = 0
 for(let i of x){
   y = i + y
 }
 return y
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
