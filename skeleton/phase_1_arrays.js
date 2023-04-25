
// Array.prototype.uniq = function(arr) {
//     let array = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (!array.includes(arr[i])) {
//             array.push(arr[i]);
//         }
            
//     }
//     return array;
// }

// console.log(Array.prototype.uniq([1,2,2,3,4]))

// Array.prototype.twoSum = function(arr) {

//     let array = []; 

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if ((j > i) && (arr[i] + arr[j] === 0)) {
//                 array.push([i,j]);
//             }
//         }
//     }
//     return array;
// }

// console.log(Array.prototype.twoSum([1,2,-2,3,-3]))


// Array.prototype.transpose = function(arr) {

//     const numRows = arr.length;
//     const numCols = arr[0].length;
//     let transposedArray = new Array(numCols).fill(new Array(numRows));

//     for (let i = 0; i < numRows; i++) {
//         console.log(i);
//         for (let j = 0; j < numCols; j++) {
//             console.log(j);
//             transposedArray[i][j] = arr[j][i];
//         }
//     }
//     return transposedArray;
// }

// console.log(Array.prototype.transpose([[1,2,3],[1,2,3],[1,2,3]]))

// Array.prototype.transpose = function(arr) {
//     const result = [];
//     for (let i = 0; i < arr[0].length; i++) {
//       result[i] = [];
//       for (let j = 0; j < arr.length; j++) {
//         result[i][j] = arr[j][i];
//       }
//     }
//     return result;
// }

//   console.log(Array.prototype.transpose([[1,2,3],[1,2,3],[1,2,3]]))

Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

console.log(Array.prototype.myEach([1,2,3]))