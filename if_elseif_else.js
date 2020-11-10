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

// Taking 3 numbers from cmd line and printing the max and min value after doing arithmetic operations
{
    const prompt = require('prompt-sync')();
    const numInput1 = prompt('Enter 1st number: ');
    const numInput2 = prompt('Enter 2nd number: ');
    const numInput3 = prompt('Enter 3rd number: ');
    var a = numInput1;
    var b = numInput2;
    var c = numInput3;
    console.log("The three numbers are: " + a + ", " + b + " and " + c);
    let result1 = a + b * c;
    console.log(result1);
    let result2 = a % b + c;
    console.log(result2);
    let result3 = c + a / b;
    console.log(result3);
    let result4 = a * b + c;
    console.log(result4);

    let min = result1;
    if(result2 < min)
        min = result2;
    else if(result3 < min)
        min = result3;
    else if(result4 < min)
        min = result4;
    console.log("The minimum value is: " + min);

    let max = result1;
    if(result2 > max)
        max = result2;
    else if(result3 > max)
        max = result3;
    else if(result4 > max)
        max = result4;
    console.log("The maximum value is: " + max);
}