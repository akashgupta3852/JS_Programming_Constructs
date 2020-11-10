// Printing the maximum and minimum number among 5 numbers
{
    let number1 = Math.floor(Math.random() * 1000);
    let number2 = Math.floor(Math.random() * 1000);
    let number3 = Math.floor(Math.random() * 1000);
    let number4 = Math.floor(Math.random() * 1000);
    let number5 = Math.floor(Math.random() * 1000); 
    let minNum = number1;
    let maxNum = number1;

    //Getting the minimum number
    if(number2 < minNum)
        minNum = number2;
    if(number3 < minNum)
       minNum = number3;
    if(number4 < minNum)
        minNum = number4;
    if(number5 < minNum)
        minNum = number5;

    //Getting the maximum number
    if(number2 > maxNum)
        maxNum = number2;
    if(number3 > maxNum)
        maxNum = number3;
    if(number4 > maxNum)
        maxNum = number4;
    if(number5 > maxNum)
        maxNum = number5;

    console.log("The minimum number is: " + minNum);
    console.log("The maximum number is: " + maxNum);
}

// Printing true if day of month is between March 20 and June 20, false otherwise
{
    const prompt = require('prompt-sync')();
    const day = prompt('Enter day: ');
    const month = prompt('Enter month: ');
    if(month == "March" || month == "April" || month == "May") {
        if(day >= 20 && day <= 31 && month == "March")
            console.log("True");
        if(day >= 1 && day <= 30 && month == "April") 
            console.log("True");
        if(day >= 1 && day <= 31 && month == "May")
             console.log("True");
        if(day >= 1 && day <= 20 && month == "June")
            console.log("True");
    }
    else 
        console.log("False");
}

// Checking whether the year is leap year or not
{
    const prompt = require('prompt-sync')();
    const year = prompt('Enter year: ');
    if(year %4 == 0) {
        if(year % 100 == 0) {
            if(year % 400 == 0)
                console.log(year + " is a leap year");
            else
                console.log(year + " is not a leap year");
        }
        else 
            console.log(year + " is a leap year");
    }
    else 
        console.log(year + " is not a leap year");
}

// Simulating a coin flip and printing out "Heads" or "Tails" accordingly
{
    const HEAD = 0;
    let toss = Math.floor(Math.random()*10)%2;
    if(toss==HEAD)
        console.log("Heads");
    else 
        console.log("Tails");
}