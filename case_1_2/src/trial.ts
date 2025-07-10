const isPalindrome = (str: string) => {
  const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = normalizedStr.split("").reverse().join("");
  return normalizedStr === reversedStr;
};

console.log(isPalindrome("madam madam"));
console.log(isPalindrome("hello oll 123 eh"));
console.log(isPalindrome("level"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("noon"));
