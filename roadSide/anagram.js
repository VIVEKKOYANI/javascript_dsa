const anagram = (s,t) => {
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");

  return s === t;
}

console.log(anagram("anagram", "nagaram"));
console.log(anagram("rat", "car"));