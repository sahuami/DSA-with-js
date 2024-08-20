let Array = [34, 12, 45, 22]



////Bubble sort  
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     console.log(arr)
// }
// console.log("bubble")
// bubbleSort(Array)


//// SELECTION SORT
// function selctionSort(array) {
//     for (let i = 0; i < array.length - 1; i++) {
//         let min = i
//         for (j = i + 1; j < array.length; j++) {
//             if (array[min] > array[j]) {
//                 min = j
//             }
//         }
//         let temp = array[min]
//         array[min] = array[i]
//         array[i] = temp
//     }
//     console.log(array)
// }
// console.log("selection")
// selctionSort(Array)




// function insertionSort(arr) {
//     // Iterate over each element in the array starting from the second element
//     for (let i = 1; i < arr.length; i++) {
//         // The current element to be inserted into the sorted portion of the array
//         let key = arr[i];
//         // Index of the previous element
//         let j = i - 1;
        
//         // Shift elements of the sorted portion that are greater than the key
//         // to one position ahead of their current position
//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j];
//             j--;
//         }
//         // Insert the key into the correct position
//         arr[j + 1] = key;
//     }
//     console.log(arr );
// }

// // Example usage:
// insertionSort(Array)









































