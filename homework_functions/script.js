// Create a function that takes an integer number as an argument and returns “Even” for even numbers or “Odd” for odd numbers.

function evenNumber (number){
  if (number === 0){
    return true;
  } else if (number === 1){
    return false;
  } else {
    return number > 0 ? evenNumber (number-2) : evenNumber(number+2);
  }
}
console.log(evenNumber(1));
console.log(evenNumber(0));


// Trolls are attacking your comment section! Create a function that takes a string and returns a new string with all vowels removed. For example, “This website is for losers LOL!” returns “Ths wbst s fr lsrs LL!“.

function removeVowels(string){
  let vowelsRemoved = '';
  for (let i = 0; i <string.length; i++){
    if (string [i] != 'a' && string[i] != 'e' && string[i] != 'i' && string[i] != 'o' && string[i] != 'u')
    {
      vowelsRemoved += string[i];
  };
};
  return vowelsRemoved;
};
console.log(removeVowels('the aliens are here'));

// Write a function which repeats the given string exact number of times. For example, repeatString("Hello", 5) returns “HelloHelloHelloHelloHello”.

function repeatStringNumTimes(string, times) {
  if (times > 0)
    return string.repeat(times);
  else
    return "";
}
repeatStringNumTimes("hello", 6);
console.log(repeatStringNumTimes("hello", 6));