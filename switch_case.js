// Reading a single digit number from cmd line and printing them in the word
{
    const prompt = require('prompt-sync')();
    const num = prompt('Enter a single digit number: ');
    switch(num) {
        case "0" :
            console.log("The number is Zero"); 
            break;  
        case "1" :
            console.log("The number is One");
            break;
        case "2" :
            console.log("The number is Two");
            break;
        case "3" :
            console.log("The number is Three");
            break;
        case "4" :
            console.log("The number is Four");
            break;
        case "5" :
            console.log("The number is Five");
            break;
        case "6" :
            console.log("The number is Six");
            break;
        case "7" :
            console.log("The number is Seven");
            break;
        case "8" :
            console.log("The number is Eight");
            break;
        case "9" :
            console.log("The number is Nine");
            break;
        default:
            console.log("Invalid Input");
    }
} 

// Reading a day number from cmd line and printing its day name accordingly
{
    const prompt = require('prompt-sync')();
    const dayNum = prompt('Enter day number between 1 to 7: ');
    switch(dayNum) {
        case "1" :
            console.log("Monday");
            break;
        case "2" :
            console.log("Tuesday");
            break;
        case "3" :
            console.log("Wednesday");
            break;
        case "4" :
            console.log("Thursday");
            break;
        case "5" :
            console.log("Friday");
            break;
        case "6" :
            console.log("Saturday");
            break;
        case "7" :
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day");
    } 
}

// Reading a number from cmd line and displaying its unit, tens, hundreds,… digit
{
    const prompt = require('prompt-sync')();
    const numInput = prompt('Enter a number: ');
    var num = Number(numInput);
    const UNIT_DIGIT = 1;
    const TENS_DIGIT = 2;
    const HUNDREDS_DIGIT = 3;
    const THOUSANDS_DIGIT = 4;

    console.log("1. Unit Digit");
    console.log("2. Tens Digit");
    console.log("3. Hundreds Digit");
    console.log("4. Thousands Digit");
    
    const choiceInput = prompt('Enter a choice between 1 to 4 : ');
    var choice = Number(choiceInput);
    switch(choice) {
        case UNIT_DIGIT :
            console.log("Unit digit of number : " + num + " is " + (num % 10));
            break;
        case TENS_DIGIT :
            console.log("Tens digit of number : " + num + " is " + (Math.floor(num / 10) % 10));
            break;
        case HUNDREDS_DIGIT :
            console.log("Hundreds digit of number : " + num + " is " + (Math.floor(num / 100) % 10));
            break;
        case THOUSANDS_DIGIT :
            console.log("Thousands digit of number : " + num + " is " + (Math.floor(num / 1000) % 10));
            break;
        default :
            console.log("Invalid choice");
    } 
}

// Reading a number from cmd line, converting it according to choice and printing the respective values
{
    const prompt = require('prompt-sync')();
    const numInput = prompt('Enter a number: ');
    var num = Number(numInput);
    console.log("1. Feet to Inch");
    console.log("2. Feet to Meter");
    console.log("3. Inch to Feet");
    console.log("4. Meter to Feet");
    const choiceInput = prompt('Enter a choice between 1 to 4 : ');
    var choice = Number(choiceInput);
    let convertedValue=0;
    switch(choice){
        case 1:
            convertedValue = num * 12;
            console.log("The number of inches in " + num + " feet is: " + convertedValue);
            break;
        case 2:
            convertedValue = num * 0.3048;
            console.log("The number of meters in " + num + " feet is: " + convertedValue);
            break;
        case 3:
            convertedValue = num / 12;
            console.log("The number of feet in " + num + " inches is: " + convertedValue);
            break;
        case 4:
            convertedValue = num / 0.3048;
            console.log("The number of feet in " + num + " meters is: " + convertedValue);
            break;
        default :
            console.log("Invalid choice");
    }
}