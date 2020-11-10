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