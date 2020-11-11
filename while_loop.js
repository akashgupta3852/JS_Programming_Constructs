// Printing a table of the powers of 2 that are less than or equal to 2^n till 256 is reached
{
    const prompt = require('prompt-sync')();
    let num = Number(prompt('Enter a number for tabulating power of 2: '));
    console.log("The table of the powers of 2 that are less than or equal to 2^" + num + " till 256 is reached");
    let result = 2, pos = 0;
    while(result <= 256 && pos < num) {
        console.log(result);
        result = result * 2;
        pos++;
    }
}