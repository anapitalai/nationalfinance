//get the handles
var grossInputHandle = document.querySelector('[name=grossInput]');
var fortnightsInputHandle = document.querySelector('[name=fortnightInput]');
var interestInputHandle = document.querySelector('[name=interestInput]');
var displayView = document.querySelector('.display'); 
///create the functions
function calculate(){
var grossInputCaptured = Number(grossInputHandle.value);
var fortnightCaptured =fortnightsInputHandle.value;
console.log(fortnightCaptured);
var interestCaptured =(interestInputHandle.value)/100;
console.log(interestCaptured);
//var results = grossInputCaptured * fortnightCaptured
var nfInterest = 0.02;
var nfProcessFee = 50;



//formulas
//gross loan x company interest + K50 process fee + gross loan
var nfcharges = grossInputCaptured * nfInterest + nfProcessFee;
console.log(nfcharges);
//gross and nf charges added
var grossAddedNfZcharges = nfcharges + grossInputCaptured;
console.log(grossAddedNfZcharges);
//calculation done on the gross with NF charges added
var companyInterestDuration = grossAddedNfZcharges * interestCaptured * fortnightCaptured
console.log(companyInterestDuration);
//final results
var finalResult = grossAddedNfZcharges + companyInterestDuration
console.log(finalResult);
//diplay of the final result
displayView.innerText = 'K' + finalResult.toFixed(2);
}




///add the eventlisteners
grossInputHandle.addEventListener('input',calculate);
fortnightsInputHandle.addEventListener('input',calculate);
interestInputHandle.addEventListener('input',calculate);