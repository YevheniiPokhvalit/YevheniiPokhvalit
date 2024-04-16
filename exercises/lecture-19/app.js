// Task 1
let str1 = 'I\'m a string!';
let str2 = "I'm a string!";
console.log(str1.length === str2.length); // false
console.log(str1 == str2); // true
console.log(str1 === str2); // true

// Task 2
let string5 = 'Hello World';
console.log(string5.charAt(0)); // H

// Task 3
let str3 = "Hello Javascript";
console.log(str3[0]); // H

// Task 4
let str4 = "Hello Javascript";
console.log(str4[str4.length - 1]); // t
console.log(str4.charAt(str4.length - 1)); // t
console.log(str4.slice(-1)); // t

// Task 5
let a = 'When candles are out,';
let b = 'all cats are grey.';
console.log(a.concat(' ', b)); // When candles are out, all cats are grey.

// Task 6
let fact = "Fifteen is the same as";
let a = 5;
let b = 10;
fact = fact + ' ' + (a + b);
console.log(fact); // Fifteen is the same as 15

// Task 7
let firstName = "Tom";
let lastName = "Cat";
function getFullName() {
    return firstName + ' ' + lastName;
}
console.log(getFullName()); // Tom Cat

// Task 8
function greeting() {
    return "Hello, " + getFullName() + "!";
}
console.log('<div><h1>' + greeting() + '</h1></div>'); // <div><h1>Hello, Tom Cat!</h1></div>

// Task 9
let string1 = "  The name of our game  ";
console.log(string1.trim()); // "The name of our game"
console.log(string1); // "  The name of our game"
console.log(string1.trimLeft()); // "The name of our game  "

// Task 10
const phoneNumber = '\t  555-123\n ';
console.log(phoneNumber.trim()); // '555-123'
console.log(phoneNumber.trimEnd()); // '	 555-123'

// Task 11
let sentence = 'Always look on the bright side of life';
console.log(sentence.includes('look up')); // false
console.log(sentence.includes('look on')); // true
console.log(sentence.includes('look on', 8)); // true

// Task 12
let sentence = 'Always look on the bright side of life';
console.log(sentence.indexOf('l')); // 1
console.log(sentence.indexOf('l', 3)); // 7
console.log(sentence.indexOf('L')); // -1

// Task 13
let sentence = 'Always look on the bright side of life';
console.log(sentence.substring(6)); // "look on the bright side of life"
console.log(sentence.substring(0, 6)); // "Always"
console.log(sentence.substring(7, 11)); // "look"

// Task 14
const usernameRegex = /^[a-z0-9_-]{8,16}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Task 15
let sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';
function truncateText(text) {
    return text.substring(0, 50);
}
console.log(truncateText(sentence)); // "Lorem ipsum dolor sit amet, consectetur adipisci"
function truncateTextUsingSubstr(text) {
    return text.substr(0, 50);
}
console.log(truncateTextUsingSubstr(sentence)); // "Lorem ipsum dolor sit amet, consectetur adipisci"
