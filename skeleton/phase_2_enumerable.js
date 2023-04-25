Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i]);
    }
  };

  const myArray = [1, 2, 3, 4];

//   myArray.myEach((element) => {
//     console.log(element);
//   });
  
// Array.prototype.myMap = function(callback) {
//     const NewArray = [];
//     myArray.myEach(function(element) {
//         NewArray.push(callback(element));

//     });
//     return NewArray;
// };

Array.prototype.myReduce = function(callback, initialValue = this[0]) {
    let accumulator = initialValue;
    // let numSum = 0;
    this.myEach(function(element) {
        accumulator = callback(accumulator, element);
        // numSum += callback(to_integer(element));
    });
    // return numSum;
    return accumulator;
};

    // myArray.myReduce((accumulator, element) => {
    //     console.log(accumulator);
    // });

    // const sum = myArray.myReduce(function(accumulator, element) {
    //     return accumulator + element;
    //   }, 0);


    // console.log(sum)

    const sum = [1, 2, 3].myReduce(function(accumulator, element) {    
        return accumulator + element; 
    }, 0);

    console.log(sum)

    // Array.prototype.myReduce = function(callback, initialValue = 0) {
    //     let accumulator = initialValue;
    //     this.myEach(function(element) {
    //       accumulator = callback(accumulator, element);
    //     });
    //     return accumulator;
    //   };