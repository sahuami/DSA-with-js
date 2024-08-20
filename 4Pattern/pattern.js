// https://medium.com/@HelloMoto69/patterns-in-javascript-1992ae52a26c



// Star Patterns QUESTION

//// QUESTION 1: STAR PATTERN
// for (let rows = 1; rows <= 2; rows++) {
//    let pattern = ""
//    for (let col = 1; col <= 5; col++) {
//       pattern += "*"
//    }   
//    console.log(pattern)
// }

// 2ND METHOD
// let pattern = ""
// for (let rows = 1; rows <= 4; rows++) {
//    for (let col = 1; col <= 5; col++) {
//       pattern += "*"
//    }
//    pattern += "\n"

// }
// console.log(pattern)



//// QUESTION 2: Hollow Square Star Pattern
// let row = 4, col = 4
// for (let i = 1; i <= row; i++) {
//    let pattern = ""
//    for (let j = 1; j <= col; j++) {
//       if (i == 1 || i == row || j == 1 || j == col) {
//          pattern += "*"
//       } else {
//          pattern += " "
//       }

//    }

//    console.log(pattern)
// }


//// QUESTION 3: LEFT TRIANGLE STAR PATTERN
// let row = 5
// for (let i = 1; i <= row; i++) {
//    let pattern = ""
//    for (let j = 1; j <= i; j++) {
//       pattern += "*"
//    }
//    console.log(pattern)
// }



//// QUESTION 4: HOLLOW LEFT TRIANGLE STAR PATTERN
// let row = 5
// for (let i = 1; i <= row; i++) {
    //     let pattern = ""
    //     for (let j = 1; j <= i; j++) {
        //         if (j == 1 || j == i || i == 5) {
            //             pattern += "*"
            //         } else {
                //             pattern += " "
                //         }
                //     }
                //     console.log(pattern)
                // }
                
                //// QUESTION 5: RIGHT TRIANGLE STAR PATTERN
                // jo bhi kuch print hota hai toh vo left to right hota toh pattern ko analys krke ye dekha ki phele space print hora hai phir
// star print isliye mene inner loops do for loop ka use kiya jo phle toh space print krege then star print krega
// let rows = 5;
// let pattern = "";
// for (let i = 1; i <= rows; i++) {
    
//     for (let space = 1; space <= rows - i; space++) {
    //         pattern += " "
    //     }
    
    //     for (let star = 1; star <= i; star++) {
        //         pattern += "*"
        //     }
        
        //     pattern += "\n"
        // }
        // console.log(pattern)
        
        
        //// QUESTION 6: INVERTED left STAR PATTERN
        // // 1st method
        // for (let line = 1; line <= 5; line++) {
        //         let pattern = '';
        //         for (let star = 1; star <= 5-line+1; star++) {
        //                 pattern += '*';
        //             }
        //             console.log(pattern);
        //         }

                // // 2nd method :jb hume kisse ka inverted print krate hai toh actual code ka outer loop ki condition ko ulta kr dete hai bs
                        // let row = 4
                        // for (let i = row; i >= 1; i--) {
                        //    let pattern = ""
                        //    for (let j = 1; j <= i; j++) {
                        //       pattern += "*"
                        //    }
                        //    console.log(pattern)
                        
                        // }
                        
                        

                        //// QUESTION 7: Pramid pattern
                        // let rows = 4;
                        // let pattern = "";
// for (let i = 1; i <= rows; i++) {
    
//     for (let space = 1; space <= rows - i; space++) {
//         pattern += " "
//     }

//     for (let star = 1; star <= 2 * i - 1; star++) {
//         pattern += "*"
//     }


//     pattern += "\n"

// }
// console.log(pattern)


//// QUESTION 8: INVERTED Pramid pattern
// let row = 4;
// let pattern = "";
// for (let i = 0; i <row  ; i++) {
    
//     for (let space = 0; space < i; space++) {
    //         pattern += " "
    //     }
    //     for (let star = 0; star < 2 * (row - i)-1; star++) {
        //         pattern += '*';
        //     }
        
//     pattern += "\n"
// }
// console.log(pattern);



//// QUESTION 9: pramid and INVERTED Pramid pattern both 
// let rows = 4;
// let pattern = "";
// for (let i = 1; i <= rows; i++) {

//     for (let space = 1; space <= rows - i; space++) {
//         pattern += " "
//     }

//     for (let star = 1; star <= 2 * i - 1; star++) {
//         pattern += "*"
//     }
//     pattern += "\n"

// }

// for (let i = 1; i <=rows  ; i++) {

//         for (let space = 0; space < i; space++) {
//             pattern += " "
//         }
//         for (let star = 0; star < 2 * (rows - i)-1; star++) {
//             pattern += '*';
//         }
    
//         pattern += "\n"
//     }

// console.log(pattern)


// // QUESTION 10 : BUTTERFLY PATTERN

// let row = 4
// let pattern = ""
// for(let i = 1; i <= row; i++){
      
//     for(let j = 1; j <=i; j++){
//         pattern += "*"
//      }

//     for(let space= 1; space<= 2 *(row-i); space++ ){
//           pattern += " "
//      }
//      for(let j = 1; j <=i; j++){
//         pattern += "*"
//      }

// pattern += "\n"     
//     }

// for(let i = row; i >= 1; i--){
      
//     for(let j = 1; j <=i; j++){
//         pattern += "*"
//      }

//     for(let space= 1; space<= 2 *(row-i); space++ ){
//           pattern += " "
//      }
//      for(let j = 1; j <=i; j++){
//         pattern += "*"
//      }

// pattern += "\n"     
//     }


    
//     console.log(pattern)











// Number Patterns QUESTION

// QUESTION 1: Triangle Pattern- I
// let row = 5
// for(let i = 1; i<=row; i++){
//     let pattern = ""
//     for(let j = 1; j<=i; j++)
//         pattern += j
//     console.log(pattern)
// }


// QUESTION 2: Triangle Pattern- II
// let row = 5
// for (let i = 1; i <= row; i++) {
//     let pattern = ""
//     for (let j = 1; j <= i; j++)
//         pattern += i
//     console.log(pattern)
// }


// QUESTION 3: Triangle Pattern- III
// let row = 4
// let variable = 1 
// for (let i = 1; i <= row; i++) {
//     let pattern = ""
//     for (let j = 1; j <= i; j++){
//         pattern +=  variable + " "
//         variable++
//     }

//     console.log(pattern)
// }


// QUESTION 4: REVERSE Triangle Pattern- I
// let row = 5
// for (let i = 1; i <=row; i++) {
//     let pattern = ""
//     for (let j = 1; j <= row - i + 1  ; j++) {
//         pattern += j
//     }
//     console.log(pattern)
// }



// // QUESTION 5: PRAMID Pattern- I
// let rows = 5;

// for (let line = 0; line < rows; line++) {
//     let pattern = "";
//     for (let space = 1; space <= rows - line - 1; space++) {
//         pattern += " "
//     }
//     for (let j = 1; j <= 2 * line + 1; j++) {
//         pattern += j
//     }
//     console.log(pattern)

// }



// // QUESTION 6: PRAMID Pattern- II
// let rows = 3;
// let variable = 1
// for (let line = 0; line < rows; line++) {
//     let pattern = "";
//     for (let space = 1; space <= rows - line - 1; space++) {
//         pattern += " "
//     }
//     for (let j = 1; j <= 2 * line + 1; j++) {
//         pattern += variable 
//         variable++
        
//     }
//     console.log(pattern)
    
// }



// // QUESTION 7: PRAMID  0/1 Pattern- II
// let rows = 3;
// let variable = 1
// for (let line = 0; line < rows; line++) {
//     let pattern = "";
//     for (let space = 1; space <= rows - line - 1; space++) {
//         pattern += " "
//     }
//     for (let j = 1; j <= 2 * line + 1; j++) {

//         if (j % 2 == 0) {
//             pattern += variable -1
//         }
//         else{
//             pattern += variable
//         }
//     }
//     console.log(pattern)

// }




























// let ch = 'A';

// for (let line = 1; line <= 5; line++) {
//     for (let chars = 1; chars <= line; chars++) {
//         console.log(ch);
//         ch++;
//     }
// }

// let alpha = ""

// for(let i = 65; i<=68; i++){
//        alpha = alpha + String.fromCharCode(i)
//     }
//     console.log(alpha)








































