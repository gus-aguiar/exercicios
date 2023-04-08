const readline = require("readline-sync");
const calcBmi = (weight, height) => {
    const altura = height / 100;
    const bmi = weight / (altura ** 2);
    return bmi;
    }
function main() {
    const weight = readline.questionInt('What\'s your weight? (kg) ');
    const height = readline.questionInt('What\'s your height? (cm) ');
 
    const bmi = calcBmi(weight, height);
    console.log('Your BMI is: ' + bmi.toFixed(2));
 
    switch (true) {
        case bmi < 18.5:
            console.log('Underweight');
            break;
            
        case bmi >= 18.5 && bmi <= 24.9:
            console.log('Normal weight');
            break;
            
        case bmi >= 25 && bmi <= 29.9:
            console.log('Overweight');
            break;
            
        case bmi >= 30:
            console.log('Obesity');
            break;
    }
 }
main();