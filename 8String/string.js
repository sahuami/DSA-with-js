// Strings are for storing text
// Strings are written with quotes(single or double)
// A JavaScript string is zero or more characters written inside quotes.
// Example:
// let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
// console.log(`string are "${str}" and whose length is ${str.length}`)

// Javascript strings are primitive and immutable: 
// STRING METHOD: All string methods produce a new string without altering/changing the original string.

// 1. The length property returns the length of a string:
// 2. The charAt() OR at() method returns the character at a specified index (position) in a string:
// 3. A string is converted to lower case with toLowerCase():
// 4. A string is converted to upper case with toUpperCase():
// 5. concat() joins two or more strings:
// 6. The trim() method removes whitespace from both sides of a string:
// 7. The repeat() method returns a string with a number of copies of a string.
// 8. The replace() method replaces a specified value with another value in a string:
// 9. A string can be converted to an array with the split() method:
// 10. slice() extracts a part of a string and returns the extracted part in a new string.
//     The method takes 2 parameters: start position, and end position (end not included).
// 11. The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:


////1ST: STRING METHOD
// let str = "   Amit    ", str1 = "Amit", str2 = "Sahu", str3 = " "
// console.log(str.toLowerCase())  
// console.log(str.toUpperCase())    
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i].toUpperCase())
// }
// console.log(str1.concat(str3).concat(str2))   
// console.log(str1.charAt(0, 3))    
// console.log(str.trim())
// console.log(str.repeat(2))
// console.log(str1.replace("mit" , "Priya"))
// console.log(str1.split())
// console.log(str1.slice(0,3))
// console.log(str1.indexOf("t"))


////2ND: reverse an string
// function ReverseString(s){

//     let ReverseStr = ""
//     for(i= str.length-1; i>= 0; i--){
//         ReverseStr += str[i]
//     }
//     console.log(ReverseStr)
// }

// let str =  " amit sahu"
// ReverseString(str)


////3rd: remove duplicate letter
// let str = "amit priya"
// let result = ""
// for (let i = 0; i < str.length; i++) {
//     let duplicate = false
//     for (let j =0; j <i; j++) {
//         if (str[i] == str[j]) {
//             duplicate = true
//             break;

//         }
//     }
//     if (!duplicate) {
//         result += str[i]
//     }
// }

// console.log(result)


////4th count how many vowel and consonant in string



////5th check the string are Anagram(An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, “act” and “tac” are anagrams of each other.)

let str1 = "silent"
let str2 = "lister"

let anagram = false

for(ch of str1){
    console.log(ch)
}

