"use strict";
//get the handles
var grossInputHandle = document.querySelector('[name=grossInput]');
var fortnightsInputHandle = document.querySelector('[name=fortnightInput]');
var interestInputHandle = document.querySelector('[name=interestInput]');
var displayView = document.querySelector('.display');
var fortnightlyViewHandle = document.querySelector('.fortnightly');
const displayPerFortnitelyHandle = document.querySelector('.fortnightly');

///create the functions
function calculate() {
    var grossInputCaptured = Number(grossInputHandle.value);
    var fortnightCaptured = fortnightsInputHandle.value;
    console.log(fortnightCaptured);
    var interestCaptured = (interestInputHandle.value) / 100;
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
    displayView.innerText = 'Gross Loan:PGK' + finalResult.toFixed(2);

    //display per fornightly repayment
    const fortnightlyCalculated = finalResult / fortnightCaptured
    console.log(fortnightlyCalculated);
    displayPerFortnitelyHandle.innerText = "PGK" + fortnightlyCalculated.toFixed(2) + ' per fortnight';

}



///add the eventlisteners
grossInputHandle.addEventListener('input', calculate);
fortnightsInputHandle.addEventListener('input', calculate);
interestInputHandle.addEventListener('input', calculate);
fortnightlyViewHandle.addEventListener('input', calculate);

//leaflet map
var map = L.map('mapid').setView([-6.72811, 147.00072], 15);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-6.72811, 147.00072]).addTo(map)
    .bindPopup('<h4>National Finance Office</h4>')
    .openPopup();


//click events
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
