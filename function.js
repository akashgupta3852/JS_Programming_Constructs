// Converting degC into degF and vice versa
{    
    function degFToDegCConversion(degF) {
        if(degF >= 32 && degF <= 212) {
            console.log("The equivalent of "+ degF + " degF is: "+ ((degF - 32) * 5 / 9) + " degC");
        }
        else
            console.log("Sorry, the temp. input should be between 32 - 212 degF");
    }

    function degCToDegFConversion(degC) {
        if(degC >= 0 && degC <= 100) {
            console.log("The equivalent of "+ degC + " degC is: "+ ((degC * 9 / 5) + 32) + " degF");
        }
        else
            console.log("Sorry, the temp. input should be between 0 - 100 degC");
    }

    console.log("Welcome to the Temperature Conversion Program");
    console.log("1. Convert degree celsius into fahrenheit");
    console.log("2. Convert fahrenheit into degree celsius");
    const prompt = require('prompt-sync')();
    let choice = Number(prompt("Choose your option between 1 and 2: "));
    switch(choice) {
        case 1:
            let degCInput = Number(prompt("Enter the temperature: "));
            degCToDegFConversion(degCInput);
            break;
        case 2:
            let degFInput = Number(prompt("Enter the temperature: "));
            degFToDegCConversion(degFInput);
            break;
        default:
            console.log("Invalid choice");
    }
}

// Checking whether two numbers are palindrome or not
{
    function isPalindrome(num1, num2) { 
        let reverse = 0;
		while(num1 > 0)  {
			let rem = num1 % 10;
			reverse = reverse * 10 + rem;
			num1 =Math.floor(num1 / 10);
        }
        return reverse == num2;
    }

    console.log("Welcome to Palindrome Program");
    const prompt = require('prompt-sync')();
    let num1 = Number(prompt("Enter 1st number: "));
    let num2 = Number(prompt("Enter 2nd number: "));
    let result = isPalindrome(num1, num2);
    if(result)
		console.log(num1 + " and "+ num2 + " are palindromes");
	else
    console.log(num1 + " and "+ num2 + " are not palindromes");
}