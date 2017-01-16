// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var length = cardNumber.length;
  var prefixOfOne = cardNumber[0];
  var prefixOfTwo = cardNumber.substring(0,2);
  var prefixOfThree = cardNumber.substring(0,3);
  var prefixOfFour = cardNumber.substring(0,4);
  var prefixOfSix = cardNumber.substring(0,6);

  if (length === 14 && (prefixOfTwo === '38' || prefixOfTwo === '39')){
  	return "Diner's Club";
  } else if (length === 15 && (prefixOfTwo === '34' || prefixOfTwo === "37")){
  	return "American Express";
  } else if (length === 16 && (prefixOfTwo === '51' || prefixOfTwo === '52' || prefixOfTwo === '53' || prefixOfTwo === '54' || prefixOfTwo === '55')){
  	return "MasterCard";
  } else if ((prefixOfFour === '4903' || prefixOfFour === "4905" || prefixOfFour === "4911" || prefixOfFour === "4936" || prefixOfSix === "654182" || prefixOfSix === "633110" || prefixOfFour === "6333" || prefixOfSix === "564182" || prefixOfFour === "6759") && (length === 16 || length === 18 || length === 19)){
  	return "Switch"
  } else if (cardNumber.startsWith("4") && (length === 13 || length === 16 || length === 19)) {
  	return "Visa";
  } else if ((cardNumber.startsWith("6011") || cardNumber.startsWith("644") || cardNumber.startsWith("645") || cardNumber.startsWith("646") || cardNumber.startsWith("647") || cardNumber.startsWith("648") || cardNumber.startsWith("649") || cardNumber.startsWith("65")) && (length === 16 || length === 19)) {
  	return "Discover";
  } else if ((cardNumber.startsWith("5018") || cardNumber.startsWith("5020") || cardNumber.startsWith("5038") || cardNumber.startsWith("6304")) && (length >= 12 && length <= 19)) {
  	return "Maestro"
  } else if ((length === 16 || length === 17 || length === 18 || length === 19) && (624 <= prefixOfThree <= 626 || 622126 <= prefixOfSix <= 622925 || 6282 <= prefixOfFour <= 6288)){
  	return "China UnionPay"
  }
};
console.log(detectNetwork("5641821234567890"));