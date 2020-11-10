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