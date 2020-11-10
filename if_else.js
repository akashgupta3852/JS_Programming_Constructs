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