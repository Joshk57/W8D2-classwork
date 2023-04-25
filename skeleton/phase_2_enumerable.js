Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i]);
    }
  };

  const myArray = [1, 2, 3, 4];

  myArray.myEach((element) => {
    console.log(element);
  });
  
Array.prototype.myMap = function(callback) {
    const NewArray = [];
    myArray.myEach(function(element) {
        NewArray.push(callback(element));

    });
    return NewArray;
};