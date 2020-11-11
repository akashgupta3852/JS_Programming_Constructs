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

// Checking if a number is prime then show that its palindrome is also prime
{
    console.log("Welcome to Prime Number and Palindrome Program");
    const prompt = require('prompt-sync')();
    let num = Number(prompt("Enter the number: "));
    if(isPrime(num)) {
        console.log(num + " is a prime number");
        let number = checkPalindrome(num);
        console.log("The palindrome of " + num + " is " + number);
        if(isPrime(number))
            console.log(number + " is also a prime number");
        else
            console.log(number + " is not a prime number");
    }
    else
        console.log(num + " is not a prime number");

    function isPrime(num) {
        if(num == 1)
            return false;
        else {
            for(let pos = 2; pos <= num; pos++) {
                if(num == pos)
                    return true;
                if(num % pos == 0)
                    return false;
            }
        }
    }    

    function checkPalindrome(num) { 
        let reverse = 0;
		while(num > 0)  {
			let rem = num % 10;
			reverse = reverse * 10 + rem;
			num =Math.floor(num / 10);
        }
        return reverse;
    }
}