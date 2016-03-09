function largestOfFour(arr) {
  
  var valMax = function getMaxOfArray(numArray) {
                return Math.max.apply(null, numArray);
               };
  
  var newArr = [];
  
  for (i = 0; i < arr.length; i++) {
     newArr.push(valMax(arr[i]));  
  }
  
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
