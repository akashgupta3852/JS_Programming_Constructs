// Converting degC into degF and vice versa
{    
    function degFToDegCConversion(degF) {
        if(degF >= 32 && degF <= 212) {
            console.log("The equivalent of "+ degF + " degF is: "+ ((degF - 32) * 5 / 9) + " degC");
        }
        else
            console.log("Invalid temp. input");
    }

    function degCToDegFConversion(degC) {
        if(degC >= 0 && degC <= 100) {
            console.log("The equivalent of "+ degC + " degC is: "+ ((degC * 9 / 5) + 32) + " degF");
        }
        else
            console.log("Invalid temp. input");
    }

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