



Array.prototype.uniq = function() {
    let array = [];

    for (let i = 0; i < this.length; i++) {
        if (!array.includes(this[i])) {
            array.push(this[i]);
        }
            
    }
    console.log(array);
}

console.log(Array.prototype.uniq([1,2,2,3,4]))