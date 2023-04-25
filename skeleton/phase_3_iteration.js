// // Array.prototype.myEach = function(callback) {
// //     for (let i = 0; i < this.length; i++) {
// //       callback(this[i]);
// //     }
// //   };

// //   const myArray = [1, 2, 3, 4];


// Array.prototype.bubbleSort = function(arr) {
//     let sorted = false;
//     // const dup = arr;
//     while (!sorted) {
//         sorted = true;
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > arr[i + 1]){
//                 let prev = arr[i];
//                 arr[i] = arr[i+1];
//                 arr[i+1] = prev;
//                 sorted = false;
//             }
//         }
//     }
//     return arr;
// };


// console.log(Array.prototype.bubbleSort([9,2,1,5,4,6,8,3,2,3,4,6,-1,2,-4,56,5,7,10]))

Array.prototype.subStrings = function(arr) {
        let substrings = [];

        for (let start = 0; start < arr.length; start++) {
            for (let last = 0; last < arr.length; last++) {
                console.log(start)
                console.log(last)
                substrings.push(arr.slice([start,[last]]));
            }
        }
        return substrings;
};

console.log(Array.prototype.subStrings(["jump"]))