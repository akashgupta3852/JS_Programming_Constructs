// Finding the 2nd largest and the 2nd smallest element without sorting the array.
{
    console.log("Welcome to Finding Max and Min Number in Array");
    let numArray = new Array();
    for(let pos = 0; pos < 10; pos++) {
        let threeDigitNumber = Math.floor(100 + Math.random() * 900)
        numArray.push(threeDigitNumber);
    }
    console.log("The array of 3 digit random numbers are:");
    console.log(numArray);
    let maxNum = 100;
    let minNum = 999;
    for(let element of numArray) { 
        maxNum = Math.max(element, maxNum,);
        minNum = Math.min(element, minNum);
    }
    let index = numArray.indexOf(maxNum);
    numArray.splice(index, 1);
    index = numArray.indexOf(minNum);
    numArray.splice(index, 1);
    maxNum = 100;
    minNum = 999;
    for(let element of numArray) { 
        maxNum = Math.max(element, maxNum,);
        minNum = Math.min(element, minNum);
    }
    console.log("The 2nd largest number is " + maxNum);
    console.log("The 2nd smallest number is " + minNum);
}

// Finding the 2nd largest and the 2nd smallest element after sorting the array.
{
    console.log("Welcome to Finding Max and Min Number in Array");
    let numArray = new Array();
    for(let pos = 0; pos < 10; pos++) {
        let threeDigitNumber = Math.floor(100 + Math.random() * 900)
        numArray.push(threeDigitNumber);
    }
    console.log("The array of 3 digit random numbers are:");
    console.log(numArray);
    numArray.sort();
    console.log("The sorted array is:");
    console.log(numArray);
    console.log("The 2nd smallest number is " + numArray[1]);
    console.log("The 2nd largest number is " + numArray[numArray.length - 2]);
}

// Finding factors of a number using prime factorisation method and storing them in a array.
{
    console.log("Welcome to Prime Factorisation Program");
    const prompt = require('prompt-sync')();
    let num = Number(prompt('Enter the number for finding its prime factor: '));
    console.log("The prime factors of " + num + " are: ");
    let factorArray = new Array();
    for(let pos = 2; pos < num; pos++) {
        for( ; num % pos == 0 ; num /= pos)
            factorArray.push(pos);
     }
     if(num > 2)
        factorArray.push(num);
    console.log(factorArray);
}