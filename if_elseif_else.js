// Reading a single digit number from cmd line and printing them in the word
{
    const prompt = require('prompt-sync')();
    const num = prompt('Enter a single digit number: ');
    if(num == 0)
        console.log("The number is Zero"); 
    else if(num == 1)
        console.log("The number is One");
    else if(num == 2)
        console.log("The number is Two");
    else if(num == 3)
        console.log("The number is Three");
    else if(num == 4)
        console.log("The number is Four");
    else if(num == 5)
        console.log("The number is Five");
    else if(num == 6)
        console.log("The number is Six");
    else if(num == 7)
        console.log("The number is Seven");
    else if(num == 8)
        console.log("The number is Eight");
    else if(num == 9)
        console.log("The number is Nine");
    else
        console.log("It is invalid number");
}

// Reading a day number from cmd line and printing its day name accordingly
{
    const prompt = require('prompt-sync')();
    const dayNum = prompt('Enter day number between 1 to 7: ');
    if(dayNum == 1)
        console.log("The day is Monday");
    else if(dayNum == 2)
        console.log("The day is Tuesday");
    else if(dayNum == 3)
        console.log("The day is Wednesday");
    else if(dayNum == 4)
        console.log("The day is Thursday");
    else if(dayNum == 5)
        console.log("The day is Friday");
    else if(dayNum == 6)
        console.log("The day is Saturday");
    else if(dayNum == 7)
        console.log("The day is Sunday");
    else
        console.log("It is invalid number"); 
}

// Reading a number from cmd line and displaying its unit, tens, hundreds,…
{
    const prompt = require('prompt-sync')();
    const numInput = prompt('Enter a number: ');
    var num = numInput;
    console.log("Its unit, tens, hundreds,... digit is");
    while(num > 0) {
        let rem = num % 10;
        console.log(rem);
        num = num / 10;
        num = Math.floor(num);
    }
}