function reverseString(str) {
  str_split = str.split("");
  str_reverse = str_split.reverse();
  str_join = str_reverse.join("");
  return str_join;
}

reverseString("hello");
