
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

Array.prototype.twoSum = function(arr) {

    let array = []; 

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if ((j > i) && (arr[i] + arr[j] === 0)) {
                array.push([i,j]);
            }
        }
    }
    return array;
}

console.log(Array.prototype.twoSum([1,2,-2,3,-3]))

