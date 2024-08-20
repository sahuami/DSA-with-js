// https://www.w3schools.com/js/
// console.log("amit");
// console.log(1234);
// console.log(2+2);
// console.log('apna  college' , 123);
// console.log('*****\n****\n***\n**\n*')

// VARIABLE
// JavaScript Variables can be declared in 4 ways:
// Automatically
// Using var
// Using let
// Using const


//// Template literals(`` backtik)
// let a = 5;
// let b = 10;
// console.log(`your pay ${a + b} rupees`);



// // operators/mathematical operator
// let a = 20;
// let b = 10;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);  // a ko multiple kro b times
// console.log(a++)
// console.log(a++ + a)
// console.log(a)
// console.log(++a)
// console.log(b--)
// console.log(b)
// console.log(--b)
// var c=3, d= 5
// var result = a**c + 2*a*b/c +b*b*c +d*c/a - b**c
//  console.log(result)

// var b = 34;
// var c = true  // true ko 1 consider kiya jata hai 
// var d = b+c;
// console.log(d) // ans 35 aayga  
// // note: agar hum string or lele toh tenno value concat ho jaygi tab true ki value 1 consider nhi ki jaygi


//// comparision operator/relational operator
// let num = 8;
// let str = "8";
// let x = 5;
// console.log(num == str)  // compare value, not type 
// console.log(num === str)  // compare both value and  type
// console.log(num!= x);
// console.log(num> x);
// console.log(num< x);
// console.log(num>= x);
// console.log(num<= x);


//// logical operator
// let x= 5;
// let y= 6;
// let z= 5;
// console.log(x<y && y>z);
// console.log(x<y || y<z);
// console.log( !(x == 5));




    //// Alert and Prompt
    // alert("I am an alert box!");
    // let name = prompt("Please enter your name");
    // console.log(name);
    // prompt("hello \nhow are you")  //line break
    
    // // Get user input
    // let userInput = prompt("Enter Ist number:");
    // let userInput2 = prompt("Enter 2nd  number:");
    // // Convert user input to a number
    // let userNumber1 = parseFloat(userInput);
    // let userNumber2 = parseFloat(userInput2);
    // // Add the numbers
    // let result = userNumber1 + userNumber2;
    // // Display the result
    // alert("The result is: " + result);
    // console.log(result)
    
    // // TODO APP
//     let todo = [];
//     let req = prompt("enter your request");
//     while (true) {
//             if (req == "quit") {
//                     console.log("quitting app")
//                     break;
//                 }
//                 if (req == "list") {
//                         console.log("------")
//                         for (let i = 0; i <= todo.length; i++) {
//             console.log(i, todo[i]);
//         }
//         console.log("------")
//     }
//     else if (req == "add") {
//         let task = prompt("please enter the task you want to add")
//         todo.push(task);
//         console.log("task added");
//     }
//     else if (req == "delete") {
//         let idx = prompt("please enter the task index")
//         todo.splice(idx, 1);
//         console.log("task deleted");
//     }
//     else {
//         console.log("wrong request");
//     }
//     req = prompt("enter your request");
// }



//// get value from objects
// let student = {
//     name: "amit",
//     age: 23,
//     goal:"developer"
// }
// console.log(student["name"]);
// console.log(student.name);
// console.log(student);
// console.log(delete student.age);
// console.log(student);


// guessing game
// const max = prompt("enter the max number");
// const random = Math.floor(Math.random()*max) +1;
// let guess = prompt("enter your guess number");

//  while(true){
//     if(guess =="quit"){
//         console.log("user quit");
//         break;
//     }
//     if(guess == random){
//         console.log("your guess are right" + "congrats!!");
//         break;
//     }
//     else if(guess<random){
//         guess = prompt("your guess was too small then random number. please try again");
//     }
//     else{
//         guess = prompt("your guess was too large then random number. please try again");

//     }
//  }



// const cal = {
//     add(a, b) {
//         return a + b;
//     },

//     sub(a, b) {
//         return a - b;
//     },

//     mul(a, b) {
//         return a * b;
//     }
// };

// console.log(cal.add(1, 2));
// console.log(cal.sub(1, 2));
// console.log(cal.mul(1, 2));

let country = ["Australia", "Germany", "United States of America"];
function longestName(country) {
    let ansIdx = 0;
    for (let i = 0; i < country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if (currLen > ansLen) {
            ansIdx = i;
        }
    }
    return country[ansIdx];
}
console.log(`longest country name is "${longestName(country)}" and whose length is "${longestName(country).length}"`);


// // arrow function
// const cube = (n)=>{
//     return n*n*n ;
// };
// console.log(cube(2));


// // arrow function(implicit return)
// const sum = (a,b)=>(a+b);
// console.log(sum(2,3));




// //  set timeout
// console.log("hello");
// setTimeout(()=>{
//     console.log("today is good day");
// },4000);
// console.log("bye");





// let student= {
//         name : "amit",
//         age :23,
//         username:"@sahami",
//         password:"abcd"
//     }

//     // let {username,password}= student;
//     // console.log(username,password)
//    console.log(JSON.stringify(student));


// our first api request
// let url = "https://dog.ceo/api/breeds/image/random ";
// let url2 = "https://catfact.ninja/fact";
// let url3 = "https://quote-garden.onrender.com/api/v3/quotes"

// fetch(url)
//   .then((res) => {
//     return res.json();
//   })

//   .then((data) => {
//     console.log("data1 =", data.message);
//     return fetch(url2);
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data2) => {
//     console.log("data2 =", data2.fact);
//     return fetch(url3);
//   })
//   .then((data3) => {
//     console.log("data3 = ", data3.headers);
//   })
//   .catch((err) => {
//     console.log("ERROR", err);
//   })


// using fetch with async await
// let url = "https://catfact.ninja/fact";




