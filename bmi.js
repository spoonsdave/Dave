// INPUT

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const stoneIN = parseFloat(document.querySelector('#stoneIN').value);
    const poundsIN = parseFloat(document.querySelector('#poundsIN').value);
    const feetIN = parseFloat(document.querySelector('#feetIN').value);
    const inchesIN = parseFloat(document.querySelector('#inchesIN').value);

    const results = document.querySelector('#results');

// WEIGHT CALC

    const weightLB = (stoneIN * 14) + poundsIN;
    const weightKG = weightLB * 0.453592;

// HEIGHT CALC

    const totalInches = (feetIN * 12) + inchesIN;
    const heightCM = totalInches * 2.54;

// BMI CALC

    const currentBMI = ((weightKG / Math.pow((heightCM / 100), 2)) * 10) / 10;

// PERFECT WEIGHT CALC    

    const perfectWeightKG = (Math.pow((heightCM / 100), 2) * 21);
    const perfectWeightLB = (perfectWeightKG * 2.20462);

    const perfectStone = Math.floor(perfectWeightLB / 14);
    const perfectLB = Math.floor((perfectWeightLB - (perfectStone * 14)) * 10) / 10;

// WEIGHT TO LOSE CAL

    const KGToLose = weightKG - perfectWeightKG;
    const LBToLose = KGToLose * 2.20462;


    const perfectStLoss = Math.floor(LBToLose / 14);
    const perfectLBLoss = Math.floor((LBToLose - (perfectStLoss * 14))* 10) / 10;




// ROUNDING FOR DISPLAYING RESULTS

const weightKGR = Math.round(weightKG * 10) / 10;
const heightCMR = Math.round(heightCM);
const currentBMIR = Math.round(currentBMI * 10) / 10;
const perfectWeightKGR = Math.round(perfectWeightKG * 10) / 10;
const KGToLoseR = Math.round(KGToLose * 10) / 10;


//DISPLAY THE RESULTS

document.querySelector('.results').innerHTML = stoneIN + " st " + poundsIN + " lb = " + weightKGR + " kg <br>"
    + feetIN + " feet " + inchesIN + " in = " + heightCMR + " cm <br><br>"

    + "Current BMI = " + currentBMIR + "<br>"
    + "Perfect BMI = 21" + "<br><br>"

    + "Perfect Weight = " + perfectWeightKGR + " kg  /  " + perfectStone + " st " + perfectLB + " lb <br><br>"
    + "You have " + KGToLoseR + " kg  /  " + perfectStLoss + " st " + perfectLBLoss + " lb to lose";

});


