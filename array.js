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