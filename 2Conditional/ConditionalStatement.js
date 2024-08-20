
//// 1. if-else statement
// let age = 14;
// if(age >= 18 ){
//     console.log("you are eligible for vote");
// }
// else{
//     console.log("you are not eligible for vote")
// }

//// 2. else-if statement :the 'if' statement is true than the complier not check 'else if' statement and it is false than complier check 'else if' statement.

// let age = 13;
// if(age >= 18 ){
//     console.log("you are adult");
// }
// else if(age > 12 && age <=17){
//     console.log("you are teenage");
// }

// else{
//     console.log("you are child")
// }

//// nested if else statment
// let marks = 70;
// if (marks >= 33) {

//     if (marks >= 34 && marks < 70) {
//         console.log("you are get bronze medal");
//     }
//     else if (marks >= 70 && marks < 90) {
//         console.log("you are get sliver medal");
//     }
//     else if (marks >= 90) {
//         console.log("you are get gold medal");
//     }
// }
// else {
//     console.log("you are failed");
// }


//// 3. switch statement
// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.
// without "break" jaha pr case match ho jayga uske age ke sare cases bhi print ho jayge
// switch (num = 7) {
//     case 1: console.log("you are good ");
//         break;
//     case 2: console.log("you are bad")
//         break;
//     case 3: console.log("you are awesome")
//         break;
//     case 4: console.log("you are mindblowing")
//         break;
//     case 5: console.log("you are intelligent")
//         break;
//     default: console.log("No any good text")
// }


//// 4. Conditional (ternary) operator
//// variable name = (condition) ? value1:value2 
// let age = 19;
// let result = (age <= 18)? "  not give vote": "give vote";
// console.log(result);






//// QUESTION 1:
// let age = prompt("enter the age");
// if (age >= 18) {
//     alert("you are eligible for vote")
//     console.log("you are eligible for vote")
// } else {
//     alert("Not eligible for vote")
//     console.log("not eligible for vote")
// }


//// QUESTION 2:
// let a = 13, b = 12;
// if (a > b) {
//     console.log("a is larger")
// } 
// else if (a == b) {
//     console.log("a and b both equal")
// }
// else (
//     console.log("b is larger")
// )

//// QUESTION 3:
// let num = 22;
// if ( num % 2 ==0){
//     console.log("number are even")
// }
// else{
//     console.log("number are ODD")
// }

//// QUESTION 4: ACCORDING TO AGE IDENTIFY MAN CATEGORY
// let age =19;
// if(age>=18){
//     console.log("ADULT")
// }
// else if(age >=12 & age <=17){
//     console.log('TEENAGE')
// }
// else(
//     console.log("CHILD")
// )

///QUESTION 5: CALCULATE INCOME TAX
// let income = 400000;
// let tax;
// if (income < 500000) {
//     tax = 0;
// }
// else if (income >= 500000 & income <= 1000000) {
//     tax = income * 20 / 100;
// }
// else {
//     tax = income * 30 / 100
// }
// console.log(" your tax is: " + tax);


////QUESTION 6: LARGEST OF THREE NUMBER
// let a = 2, b = 2, c = 20

// if ((a > b) & (a > c)) {
//     console.log("a is largest number")

// }
// else if ((b > c)) {
//     console.log("b is largest number")

// }
// else if ((a == b) & (a == c)) {
//     console.log(" a, b, c are equal")
// }
// else (
//     console.log("c is largest number")
// )

//// QUESTION 7: 
// let num = 22;
// let number = (num % 2 == 0) ? "even" : "odd";
// console.log("Number are: " + number);
// let mark = 33;
// let result = ( mark >= 33)? "pass": "fail";
// console.log("you are: "+result)

////   QUESTION 8:
// let ch = 'a';
// switch (ch) {
//     case 'a': console.log("burger");
//         break;
//     case 'b': console.log("pizza");
//         break;
//     case 'c': console.log("momo");
//         break;
//     default: console.log("we wake up");
//         break;
// }

//// QUESTION 9:
// let a = 54, b = 34;
// let operator = "/"
// switch (operator) {
//     case '+': console.log(a + b);
//         break;
//     case '-': console.log(a - b);
//         break;
//     case '*': console.log(a * b);
//         break;
//     case '/': console.log(a / b);
//         break;
//     default: console.log("wrong operator");
//         break;
// }


