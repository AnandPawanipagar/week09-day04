
let a = 10;
++a;
console.log(a); 

let b = 10;
b++;
console.log(b); 

let c = 10;
--c;
console.log(c);

let d = 10;
d--;
console.log(d);

let x = 10,
  y = 20;
let z = --x + y;
console.log(z);

let x1 = 10,
  y1 = 20;
let z1 = x1-- + y1; // z1 = x1 + y1
console.log(z1); //30
console.log(x1); // 9
x1 = x1--; // ??? //9
console.log(`Hello, Hyderabad`);
console.log(z1);

console.log(x1); //9
// console.log(z1);
/**
 * a = b
 * a += b
 * a -= b
 * a *= b
 * a /= b
 * a %= b
 * a &= b
 * a |= b
 * a ^= b
 * a <<= b
 * a >>= b
 * a <<= b
 *
 */