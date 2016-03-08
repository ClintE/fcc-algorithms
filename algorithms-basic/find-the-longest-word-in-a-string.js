function findLongestWord(str) {
  var stringArr =  str.split(" ");
  var stringNum = [];  
  
  var test = function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  };
  
  for (i = 0; i < stringArr.length; i++) {
     stringNum.push(stringArr[i].length);
  }
  //return stringNum as argument of the get max function;  
  return test(stringNum);       
      
} 

findLongestWord("The quick brown fox jumped over the lazy dog");