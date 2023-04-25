
Array.prototype.uniq = function(arr) {
    let array = [];

    for (let i = 0; i < arr.length; i++) {
        if (!array.includes(arr[i])) {
            array.push(arr[i]);
        }
            
    }
    return array;
}

console.log(Array.prototype.uniq([1,2,2,3,4]))

