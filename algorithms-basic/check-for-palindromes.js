function palindrome(str) {
  // Good luck!
  lstring = str.toLowerCase();
  newString = lstring.replace(/[\W_]/g, "");
  if (newString == newString.split("").reverse().join("")){
    return true;
  } else {
    return false;
  }
  
}



palindrome("0_0 (: /-\ :) 0-0");