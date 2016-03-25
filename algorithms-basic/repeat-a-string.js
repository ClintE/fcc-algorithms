function repeatStringNumTimes(str, num) {
  
  var arr = [];

  if (num < 0) {
    return "";    
  } else {
      for (i = 0; i < num; i++){
        arr.push(str);       
      }    
  	}  
  return arr.join(separator = "");
}

repeatStringNumTimes("abc", 9);