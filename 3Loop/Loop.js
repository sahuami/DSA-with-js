
// WHILE LOOP
// The while loop loops through a block of code as long as a specified condition is true.
// syntax :
// while (condition) {
//   // code block to be executed
// }
// example:
// let counter = 0;
// while(counter <5){
//     console.log("hello amit")
//     counter++;
// }

// // QUESTION 1: PRINT NATURAL NUMBER
// let count = 1;
// while(count <=10){
//     console.log(count);
//     count++;
// }

////QUESTION 2: PRINT N NATURAL NUMBER WITH USER INPUT
// let  i = prompt("how many natural number you are print")
//  let count = 0;
// while( count <= i){
//     console.log(count)
//     count++;
// }

//// QUESTION 3: SUM OF NATURAL NUMBER
// let n = 1;
// let sum = 0;
// while(n <= 13){
//     sum += n
//     n++
// }
// console.log( ` The sum is ${sum}`)

// //  QUESTION 4; PRINT SQUARE PATTERN USING WHILE LOOP
// let j = 1
// while (j <= 4) {
//     console.log("****")
//     j++;
// }






// FOR LOOP: Loops are handy, if you want to run the same code over and over again, each time with a different value.
// Loops can execute a block of code a number of times.
// example
// for(let i = 1; i<=5; i++ ){
//     console.log("amit")
// }

//// QUESTION 1; PRINT SQUARE PATTERN USING LOOP
// for (let i = 1; i <= 5; i++) {
//     console.log("****")
// }

///QUESTION 2: PRINT REVERSE NUMBER
// for(let i = 10; i >= 1 ; i--){
//     console.log(i)
// }

//// QUESTION 3: LAST DIGIT OF NUMBER
// let num = 1234;
// let lastdigit = num % 10;
// console.log(lastdigit)
// //// using loop
// let number = 1234; // Example number
// let numberStr = number.toString(); // Convert the number to a string
// let lastDigit;
// for (let i = 0; i < numberStr.length; i++) {
//     lastDigit = numberStr[i]; // Update lastDigit to the current character
// }
// lastDigit = parseInt(lastDigit); // Convert the last character back to a number
// console.log(lastDigit); // Output: 4


// //QUESTION 4: CHECK NUMBER PRIME OR NOT
// let num = 1;
// let isPrime = true;

// if (num == 1) {
//     console.log(`${num} is not prime`)

// }

// else {
//     for (let i = 2; i <= num - 1; i++) {
//         if (num % i == 0) {
//             isPrime = false;
//         }
//     }
//     if (isPrime == true) {
//         console.log(`${num} is prime`)
//     }
//     else {
//         console.log(`${num} is not prime`)

//     }
// }


////QUESTION 5: find factorial
// let data = 4
// let fact = 1
// for (let i = data; i > 1; i--) {
//     fact = fact * (i)
// }
// console.log(fact)



// // QUESTION 6TH: check it is palindrome
// let str = "racecar"
// let j = str.length - 1
// let palindrome = true
// for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] != str[j]) {
//         palindrome = false
//         break;

//     }
//     j--
// }
// console.log(palindrome) 


// "FOR OF "  LOOP
// let str = ["a", "b", "c"]
// for (string of str) {
//     console.log(string)
// }




