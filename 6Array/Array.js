
// ARRAY:An array is a special variable, which can hold more than one value:
// SYNTAX:
// const/let array_name = [item1, item2, ...];      
// EXAMPLE 1:
// const cars = [
//     "Saab",
//     "Volvo",
//     "BMW"
//   ];

// EXAMPLE 2:
// const cars = [];
// cars[0]= "Saab";
// cars[1]= "Volvo";
// cars[2]= "BMW";

// EXAMPLE 3:
// const cars = new Array("Saab", "Volvo", "BMW");

// // 1ST:  traversed an array
// let data = [3,2,9,4,6,7,10,34,12,]
// for( let i =0 ; i<data.length; i++){
//     console.log(data[i])
// }

// // 2ND: access element in array
// console.log(data[3] )  

// // 3RD: change arrays Element
// data[3]= 44 
// console.log(data)

// // 4TH: INSERT Element IN ARRAY
// let arr = [1, 2, 3,  2];
// let newElement = 1.5;
// let index = 1;  // The index at which the new element should be inserted

// arr.length = arr.length + 1;  // Increase the array length by one

// // Shift all elements to the right starting from the index
// for (let i = arr.length - 1; i > index; i--) {
//     arr[i] = arr[i - 1];
// }

// // Assign the new element to the specific index
// arr[index] = newElement;

// console.log(arr);  // Output: [1, 1.5, 2, 3]


// // 5TH: delete Element IN ARRAY
// let arr = [1, 2, 3, 4];
// let index = 1;  // The index of the element to be deleted

// // Shift elements to the left from the specified index
// for (let i = index; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
// }

// // Decrease the array length by one
// arr.length = arr.length - 1;

// console.log(arr);  // Output: [1, 3, 4]


// // 6TH: search Element IN ARRAY(all element are  diffrent )
// let array = [32, 4, 2, 1, 8, 5, 3,6, 7]
// let findElement = 5;
// let found = false
// let index = 0;

// for (let i = 0; i < array.length; i++) {
//     if (array[i] == findElement) {
//         found = true
//         index = i;
//         // break;
//     }
// }
// if (found) {
//     console.log(`element are found at ${index} index`)
// }
// else {
//     console.log("element are not found")
// }


// // 7TH: search Element IN ARRAY(all element are  not  diffrent )
// let array = [1, 2, 3, 2, 4, 2, 5];
// let elementToFind = 2;
// let index = [];

// for (let i = 0; i < array.length; i++) {
//   if (array[i] === elementToFind) {
//     index.push(i);
//   }
// }
// if (index.length > 0) {
//   console.log(`Element found at index: ${index}`);
// } else {
//   console.log("Element not found");
// }

// // shorcut method: 
// // search:
// console.log(array.indexOf(elementToFind))
// // delete:
// array.splice(2,1)
// console.log(array)


//// 8th merge arrays
// // 1st way
// let data1 = [12,2,0,4,5]
// let data2 = [9,7,5,9,10,11]
// let newData = [];
// for(let i = 0; i<data1.length; i++){
//   newData.push(data1[i]);
// }
// for(let i = 0; i<data2.length; i++){
//   newData.push(data2[i]);
// }
// console.log(newData)

// // 2nd way
// let data1 = [12, 2, 0, 4, 5]
// let data2 = [9, 7, 5, 9, 10, 11]

// let newData = [];
// for (let i = 0; i < data1.length; i++) {
//     newData[i] = data1[i];
// }
// for (let i = 0; i < data2.length; i++) {
//     newData[data1.length + i] = data2[i];
// }
// console.log(newData)


//// shortcut method
// // 1st way: use concat
// let data1 = [1,2,3,4,5]
// let data2 = [6,7,8,9,10,11]
// let newData = data1.concat(data2)
// console.log(newData)

// // 2st way: use spread operator('...')
// let data1 = [1,2,3,4,5]
// let data2 = [6,7,8,9,10,11]
// let newData = [...data1,...data2]
// console.log(newData)



//// 9th merge two sorted array and final array also sorted
// function mergeArray(array1, array2) {
//     let newArray = []
//     let i = 0, j = 0, z = 0;
//     while (i < array1.length && j < array2.length) {
//         if (array1[i] < array2[j]) {
//             newArray[z] = array1[i]
//             i++
//             z++
//         }
//         else {
//             newArray[z] = array2[j]
//             j++
//             z++
//         }
//     }
//     while (i < array1.length) {
//         newArray[z] = array1[i]
//         i++;
//     }
//     while (j < array2.length) {
//         newArray[z] = array2[j]
//         j++;
//     }

//     console.log(newArray)
// }
// let array1 = [1, 2, 9, 44, 98]
// let array2 = [8, 11, 12, 15, 46, 78, 99]
// mergeArray(array1,array2)


// 10TH LINEAR SEARCH
// let number = [12, 14, 16, 18, 20, 2, 4, 6, 8, 10 ];
// let key = 20;
// let keyFound = false;
// let index = -1
// for(let i = 0; i< number.length; i++){
//     if(number[i] ==key){
//         keyFound = true
//         index = i
//         break;

//     }
// }
// if(keyFound){
//     console.log(`key found at index ${index}`)
// }else(
//     console.log("key not found")
// )


// // 11TH BINARY SEARCH  (ITS WORK ONLY SORTED ARRAY)
// let sortedArray = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// let key = 10
// let low = 0, high = sortedArray.length - 1

// while (low <= high) {
//     let mid = Math.floor((low + high) / 2)
//     if (sortedArray[mid] < key) {
//         low = mid + 1
//     }
//     else if (sortedArray[mid] == key) {
//         console.log(`key found at index ${mid}`)
//         break
//     }
//     else {
//         high = mid - 1
//     }
// }


////12TH FIND LARGEST NUMBER  OF AN ARRAY
// let arr = [23, 23, 23, 23]
// let larger = arr[0]

// if (arr.length == 0) {
//     console.log("array is empty")
// }
// else {
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > larger) {
//             larger = arr[i]
//         }
//     }
//     console.log(`the largest element in array is ${larger}`)
// }


// 13TH PAIRS OF AN ARRAY
// let numberArray = [2, 4, 6, 8, 10];
// let howManyPair = 0
// for (let i = 0; i < numberArray.length; i++) {
//     for (j = i+1; j < numberArray.length; j++) {
//         console.log([numberArray[i], numberArray[j]])
//         howManyPair++
//     }

// }

// console.log(`total pairs are ${howManyPair}`)


// // 14TH REVERSE AN ARRAY
// let arr = [2, 6,4,5,7,34,567,78];
// for(let i = 0; i<arr.length/2; i++){
//     let temp = arr[i]
//     arr[i] = arr[arr.length-i-1]
//     arr[arr.length-i-1]= temp
    
// }
// console.log(arr)




// // 15TH FIND EVEN VALUES FROM ARRAY ,MAKE DOUBLE OF EVERY ELEMENT AND FIND ARRAY LENGTH
// let arr = [10, 7, 19,,18, 22, 8, 100, 89,90]
// let evenArr = [];
// let index = 0
// let lengthOfEvenArr = 0

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         // console.log(`${arr[i]} is even`)
//         evenArr[index] = arr[i] * 2
//         index++
//         lengthOfEvenArr++
//     }
// }
// console.log(evenArr)
// console.log(`total number of element in ${lengthOfEvenArr}`) 










////11th sort the array using bubble sort
// let arr = [5, 3, 6, 1]
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp
//         }
//     }
// }
// console.log(arr)


































































































// let arr = [1,2,3,4,5];
// function print(el) {
//     console.log(el);
// }
// arr.forEach(print);


// let num = [1,2,3,4];
// let double = num.map((el)=>{
//     return el*2 ;
// });
// console.log(double);


// let arr = [2,4,6,10];
// let ans = arr.every((el)=>{
//     return el%2==0 ;
// });
// console.log(ans);



// let arr = [2,4,6];
// let finalval = arr.reduce((result,el)=> result*el);
// console.log(finalval);


// let names=["amit","shubham", "yash", "priya"];
// let [winner,runnerUp,...other]= names;
// console.log(winner,runnerUp,other);