// Getting a single digit number and printing them in the word
{
    let num = Math.floor(Math.random() * 10);
    if(num == 0)
        console.log("The number : " + num + " in word is Zero"); 
    else if(num == 1)
        console.log("The number : " + num + " in word is One");
    else if(num == 2)
        console.log("The number : " + num + " in word is Two");
    else if(num == 3)
        console.log("The number : " + num + " in word is Three");
    else if(num == 4)
        console.log("The number : " + num + " in word is Four");
    else if(num == 5)
        console.log("The number : " + num + " in word is Five");
    else if(num == 6)
        console.log("The number : " + num + " in word is Six");
    else if(num == 7)
        console.log("The number : " + num + " in word is Seven");
    else if(num == 8)
        console.log("The number : " + num + " in word is Eight");
    else
        console.log("The number : " + num + " in word is Nine");
}

// Getting a day number and printing its day name accordingly
{
    let dayNum = Math.floor(Math.random() *10) % 7 + 1;
    if(dayNum == 1)
        console.log("The day: " + dayNum + " is Monday");
    else if(dayNum == 2)
        console.log("The day: " + dayNum + " is Tuesday");
    else if(dayNum == 3)
        console.log("The day: " + dayNum + " is Wednesday");
    else if(dayNum == 4)
        console.log("The day: " + dayNum + " is Thursday");
    else if(dayNum == 5)
        console.log("The day: " + dayNum + " is Friday");
    else if(dayNum == 6)
        console.log("The day: " + dayNum + " is Saturday");
    else
        console.log("The day: " + dayNum + " is Sunday"); 
}