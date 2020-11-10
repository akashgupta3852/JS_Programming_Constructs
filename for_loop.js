// Printing a table of the powers of 2 that are less than or equal to 2^n
{
    const prompt = require('prompt-sync')();
    const numInput = prompt('Enter a number: ');
    var num = Number(numInput);
    console.log("The table of the powers of 2 that are less than or equal to 2^" + num);
    let power = 1;
    for(let position = 0 ; position < num ; position++) {
        power = power * 2;
        console.log(power);
    }
}
