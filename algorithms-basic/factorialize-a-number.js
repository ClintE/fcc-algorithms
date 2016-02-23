function factorialize(num) {
  var fac = 1;
  for (i = 1; i < num + 1; i++){
    fac *= i;  
    
  } 
  return fac;
}


factorialize(5);
