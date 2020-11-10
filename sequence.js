//Printing the single digit number
let digit = Math.floor(Math.random() * 10);
console.log("The single digit number is: " + digit);

//Printing the dice number between 1 to 6
let diceNumber = Math.floor(Math.random() * 10) % 6 + 1;
console.log("The dice number after rolling is: " + diceNumber);

//Printing the sum of two dice numbers
let diceNumber1 = Math.floor(Math.random() * 10) % 6 + 1;
let diceNumber2 =Math.floor(Math.random() * 10) % 6 + 1;
let sum = diceNumber1 + diceNumber2;
console.log("The 1st dice number after rolling is: " + diceNumber1);
console.log("The 2nd dice number after rolling is: " + diceNumber2);
console.log("The sum of both dice numbers is: " + sum);