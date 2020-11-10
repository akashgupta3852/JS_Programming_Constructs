// Printing a table of the powers of 2 that are less than or equal to 2^n
{
    const prompt = require('prompt-sync')();
    let numInput = prompt('Enter a number: ');
    let num = Number(numInput);
    console.log("The table of the powers of 2 that are less than or equal to 2^" + num);
    let power = 1;
    for(let position = 0 ; position < num ; position++) {
        power = power * 2;
        console.log(power);
    }
}

// Printing nth Harmonic number
{
    const prompt = require('prompt-sync')();
    let numInput = prompt('Enter a number : ');
    let num = Number(numInput);
    let harmonicNum = 0; 
    for (let position = 1; position <= num; position++) { 
        harmonicNum += 1 / position; 
    } 
    console.log("The Harmonic number for given value is: "+ harmonicNum);
}
