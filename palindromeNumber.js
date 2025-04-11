// Palindrome Number

function palindrome(x) {
  console.log("", Number(x.toString().split("").reverse().join("")));
  
  return x < 0 ? false : x === Number(x.toString().split("").reverse().join(""));
}

console.log(palindrome(121));
console.log(palindrome(10));
