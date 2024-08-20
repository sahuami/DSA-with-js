// A two-dimensional array in JavaScript is an array of arrays, used to represent data in a matrix or grid format. It’s useful for organizing data in rows and columns, such as tables, spreadsheets, or game boards, facilitating complex data manipulation and storage.

// syntax:
// let twoDimensionalArr = [ [ a1, a2, a3, ..., an ],
// [ b1, b2, b3, ..., bn ],
// [ c1, c2, c3, ..., cn ],
// .
// .
// .
// [ z1, z2, z3, ..., zn ] ];

// let myArray = [
//     [0, 1, 2, 3],
//     [4, 5, 6, 7],
//     [8, 9, 0, 0]
// ];

// console.log(myArray[2][1])



// let arr = [];
// let rows = 4;
// let columns = 3;

// // creating two-dimensional array
// for (let i = 0; i < rows; i++) {
//     arr[i] = [];
//     for (let j = 0; j < columns; j++) {
//         arr[i][j] = j;
//     }
// }

// console.log(arr);




function generateSpiralMatrix(rows, cols) {
  // Initialize an empty matrix

  const matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < cols; j++) {
      matrix[i][j] = 0;
    }
  }

  let value = 1;
  let top = 0;
  let bottom = rows - 1;
  let left = 0;
  let right = cols - 1;

  while (top <= bottom && left <= right) {
    // Fill top row
    for (let i = left; i <= right; i++) {
      matrix[top][i] = value++;
    }
    top++;

    // Fill right column
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = value++;
    }
    right--;

    // Fill bottom row
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = value++;
    }
    bottom--;

    // Fill left column
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = value++;
    }
    left++;
  }

  return matrix;
}

// Example usage
const row = 4;
const col = 5;
const spiralMatrix = generateSpiralMatrix(row, col);
console.log(spiralMatrix);

