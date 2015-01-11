//progamming language questions//

var answer = prompt('What programming language is in the name of a gem?');

if (answer==='Ruby') {
    Document.write("Thats right");
} else {
    document.write("You are WRONG!!!")
}

var answer = prompt('What is the best programming language');
if (answer==='JavaScript') {
  alert("You are correct");
} else {
  alert("JavaScript is the best language!");
}
/*
The Random Number Guessing Game
generates a number between 1 and 6
and gives the player two attempts to
guess the number.
 */

//assuming the player didn't guess correctly

var correctGuess = false;

//Generate random number between 1 and 6

var randomNumber = Math.floor(Math.random() * 6 ) + 1;

var guess = prompt('I am thinking of a number between 1 and 6. What is it?');

/* test to see if player is
1. correct
2. guessed to high
3. guessed too low
*/

if (parseInt(guess) === randomNumber ) {
  correctGuess = true;
} else if ( parseInt(guess) < randomNumber ) {
  var guessMore = prompt('Try again. The number I am thinking of is more then ' + guess);
  if (parseInt(guessMore) === randomNumber) {
  correctGuess = true;
  }

} else if ( parseInt(guess) > randomNumber ) {
  var guessLess = prompt('Try again. The number I am thinking of is less then ' + guess);
  if (parseInt(guessLess) === randomNumber) {
  correctGuess = true;
  }
}

// Test if player is correct and output response

if ( correctGuess ) {
    document.write('<p>You guessed the number!</p>');
} else {
    document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
}

//conditional statements practice//

var isAdmin = false;
var isStudent = false;

if ( isAdmin ) {
    alert('Welcome administrator')
} else if (isStudent) {
    alert('Welcome student')
} else (isAdmin, isStudent); {
  alert("Who are you?");
}

var isAdmin = false;
var isStudent = false;

if( isAdmin ) {
    alert('Welcome administrator');
} else if ( isStudent) {
    alert('Welcome student.')
} else if (isAdmin===false && isStudent+++false) {
    alert('Who are you?');
} else {

}

/* JavaScript final challange:

Challenge Instructions

Ask at least five questions

Keep track of the number of questions the user answered correctly

Provide a final message after the quiz letting the user know the number of questions he or she got right.

Rank the player. If the player answered all five correctly, give that player the gold crown:

3-4 is a silver crown;

1-2 correct answers is a bronze crown and

0 correct is no crown at all.
 */

//quiz begins no answer correct
var correct = 0;

// Ask questions
var answer1 = prompt("Who is the President of the US?");
if (answer1.toUpperCase === 'Obama') {
    correct += 1;
}

var answer2 = prompt("Which country is the city of Jerusalem located in?");
if (answer2.toUpperCase === 'Israel') {
    correct += 1;
}

var answer3 = prompt("Where does a horse live?");
if (answer3.toUpperCase === 'Stable') {
    correct += 1;
}

var answer4 = prompt("How many minuets in a year?");
if (answer4.toUpperCase === 525949) {
    correct += 1;
}

var answer5 = prompt("What does the 'C' in PC stand for");
if (answer5.toUpperCase === 525949) {
    correct += 1;
}
// Output results
document.write("You got " + correct + "out of 5 questions correct.");

if (correct === 5) {
    document.write("Congrats you get a Gold Crown.")
} else if (correct >= 3) {
    document.write("Congrats you get a Silver Crown.")
} else if (correct >= 1) {
    document.write("Congrats you get a Bronze Crown.")
} else {
    document.write("You get nothing :( ")
}


//Learning functions

function isEmailEmpty() {
  var field = document.getElementById(‘email’);
  if (field.value === ‘’) {
    return true;
  }  else {
      return false;
  }
}

var fieldTest = isEmailEmpty();
if (fieldTest === true) {
    alert(‘Please provide your email address.’);
}

function getRandomNumber( upper ) {
  var randomNumber = Math.floor( Math.random() * upper ) + 1; 
  return randomNumber;
}
/*
console.log( getRandomNumber(6) );
console.log( getRandomNumber(100) );
console.log( getRandomNumber(1000) );
console.log( getRandomNumber(2) );
*/

function getArea(width, length, unit) {
  var area = width * length;
  return area + “ “ + unit;
}
console.log(getArea(10, 20, ’sq ft’));

