//  number range of prime number

let number1 = parseInt(prompt("Enter a number1:"));
let number2 = parseInt(prompt("Enter a number2:"));
console.log(`first value ${number1} to second value ${number2} prime numbers:`);
for (let i = number1; i <= number2; i++) {
    var prime = false;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            prime = true;
            break;
        }
    }
    if (i > 1 && prime == false) {
        console.log("Prime Numbers:" + i);
    }
}