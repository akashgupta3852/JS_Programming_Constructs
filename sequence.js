// Printing the single digit number
let digit = Math.floor(Math.random() * 10);
console.log("The single digit number is: " + digit);

// Printing the dice number between 1 to 6
let diceNumber = Math.floor(Math.random() * 10) % 6 + 1;
console.log("The dice number after rolling is: " + diceNumber);

// Printing the sum of two dice numbers
let diceNumber1 = Math.floor(Math.random() * 10) % 6 + 1;
let diceNumber2 =Math.floor(Math.random() * 10) % 6 + 1;
let sum = diceNumber1 + diceNumber2;
console.log("The 1st dice number after rolling is: " + diceNumber1);
console.log("The 2nd dice number after rolling is: " + diceNumber2);
console.log("The sum of both dice numbers is: " + sum);

// Printing the sum and average of 5 numbers
let number1 = Math.floor(Math.random() * 100);
let number2 = Math.floor(Math.random() * 100);
let number3 = Math.floor(Math.random() * 100);
let number4 = Math.floor(Math.random() * 100);
let number5 = Math.floor(Math.random() * 100);
let result = number1 + number2 + number3 + number4 + number5;
let average = result / 5;
console.log("The sum of 5 numbers is: "+ result+ " and their average is: "+average); 

// Converting and printing the respective values
const NUM_OF_FEET_IN_ONE_INCH = 1/12;
console.log("The no. of feet in 42 inches is: " + 42 * NUM_OF_FEET_IN_ONE_INCH);
const NUM_OF_METER_IN_ONE_FEET = 0.3048;
let areaInMeters = 60 * 40 * NUM_OF_METER_IN__ONE_FEET * NUM_OF_METER_IN__ONE_FEET;
console.log("The area of rectangular plot of size 60 feet x 40 feet in sq. meters is: " + areaInMeters);
const NUM_OF_ACRES_IN_ONE_SQRMETER = 0.000247105;
console.log("The area of such 25 rectangular plots in acres is: " + 25 * areaInMeters * NUM_OF_ACRES_IN_ONE_SQRMETER);