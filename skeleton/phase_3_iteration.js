// Array.prototype.myEach = function(callback) {
//     for (let i = 0; i < this.length; i++) {
//       callback(this[i]);
//     }
//   };

//   const myArray = [1, 2, 3, 4];


Array.prototype.bubbleSort = function(arr) {
    let sorted = false;

    if (!sorted) {
        sorted = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let (arr[i] = arr[i+1]);
                let (arr[i+1] = arr[i]);
                sorted = false;
            }
        }
    }
    return arr;
};




console.log(Array.prototype.bubbleSort([2,1,5,3,7]))