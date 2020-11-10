// Printing a table of the powers of 2 that are less than or equal to 2^n
{
    const prompt = require('prompt-sync')();
    let numInput = prompt('Enter a number for tabulating power of 2: ');
    let num = Number(numInput);
    console.log("The table of the powers of 2 that are less than or equal to 2^" + num);
    let power = 1;
    for(let pos = 0 ; pos < num ; pos++) {
        power = power * 2;
        console.log(power);
    }
}

// Printing nth Harmonic number
{
    const prompt = require('prompt-sync')();
    let numInput = prompt('Enter a number n for printing nth Harmonic number: ');
    let num = Number(numInput);
    let harmonicNum = 0; 
    for (let pos = 1; pos <= num; pos++) { 
        harmonicNum += 1 / pos; 
    } 
    console.log("The Harmonic number for given value is: "+ harmonicNum);
}

// Checking whether a number is prime or not
{
    const prompt = require('prompt-sync')();
    let numInput = prompt("Enter a number to check whether it is prime or not: ");
    let num = Number(numInput);
    if(num == 1)
        console.log(num + " is not a prime number");
    else {
        for(let pos = 2; pos <= num; pos++) {
            if(num == pos) {
                console.log(num + " is a prime number");
                break;
            }
            if(num % pos == 0) { 
                console.log(num + " is not a prime number");
                break;
            }
        }
    }              
}

// Printing prime numbers between a range of given numbers
{
    const prompt = require('prompt-sync')();
    let lowerNumber = Number(prompt('Enter the lower number of range: '));
    let higherNumber = Number(prompt('Enter the higher number of range: '));
    console.log("The prime numbers between " + lowerNumber + " and " + higherNumber + " are: ");
    for(let pos = lowerNumber; pos <= higherNumber; pos++) {
        let flag = 0;
        for (let position = 2; position < pos; position++) {
            if (pos % position == 0) {
                flag = 1;
                break;                
            }
        }
        if (pos > 1 && flag == 0)
                console.log(pos);
    } 
}