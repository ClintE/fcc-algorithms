function titleCase(str) {
 
  var down = str.toLowerCase();
  var arr = down.split(/\s/gi);
  var newArr = [];
  for (i = 0; i < arr.length; i++) {
    newArr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1);
  }
  
  return newArr.toString().replace(/,/gi, " ");
}

titleCase("I'm a little tea pot");
