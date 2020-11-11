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

// Finding the magic number
{
    const prompt = require('prompt-sync')();
    let userNum = Number(prompt('Think of a number n between 1 to 100: '));
    let num = 50;
    let lowerNum = 0;
    let higherNum = 100;
    while(num != userNum) {
        if(num > userNum) {
            higherNum = num;
            num = Math.floor((lowerNum + higherNum) / 2);
        }
        if(num < userNum) {
            lowerNum = num;
            num = Math.floor((lowerNum + higherNum) / 2);
        }
    }
    console.log("The assumed number is: " + num);
}

// Simulating a coin flip and printing heads or tails accordingly 11 times
{
    const HEAD = 0;
    const TAIL = 1;
    let headCount = 0;
    let tailCount = 0;
    let tossCount = 0;
    while(tossCount < 11) {
        let toss = Math.floor(Math.random() * 10) % 2;
        if(toss == HEAD) {  
            console.log("Head")
            headCount++;
        }
        else if (toss == TAIL) {
            console.log("Tail")
            tailCount++;
        }
        tossCount++;
    }
    console.log("Total Head counts: "+ headCount);
    console.log("Total Tail counts: "+ tailCount);
}