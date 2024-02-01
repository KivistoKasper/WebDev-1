const rollButton = document.getElementById('roll-button');
const totals = document.getElementById('totals');
//get tempale 
const template1 = document.getElementById('template1');
const template2 = document.getElementById('template2');
const template3 = document.getElementById('template3');
const template4 = document.getElementById('template4');
const template5 = document.getElementById('template5');
const template6 = document.getElementById('template6');
//get num counts
const ones = document.getElementById('ones');
const twos = document.getElementById('twos');
const threes = document.getElementById('threes');
const fours = document.getElementById('fours');
const fives = document.getElementById('fives');
const sixes = document.getElementById('sixes');


// click event
rollButton.addEventListener('click', function(e) {
    rollDice();
    
    let span = totals.getElementsByTagName('span');
    let totalNum = parseInt(span[0].innerHTML);
    totalNum += 1;
    //console.log("total: " + totalNum);
    totals.getElementsByTagName('span')[0].innerHTML = totalNum;
    //console.log(ones.getElementsByTagName('p')[0].innerHTML);
    
});

// rollDice listener
document.addEventListener("rollDice", function(e){
    var rollNum = e.detail.value;
    console.log("roll: " + rollNum);
    let clone = template1.content.cloneNode(true);

    if ( rollNum === 1) {
        // clone
        clone = template1.content.cloneNode(true);

        let numCount = ones.getElementsByTagName('p')[0].innerHTML;
        if ( numCount != "-"){
            let num =parseInt(numCount);
            ones.getElementsByTagName('p')[0].innerHTML = num+1;
        }
        else {
            ones.getElementsByTagName('p')[0].innerHTML = 1;
        }
    }
    if ( rollNum === 2) {
        clone = template2.content.cloneNode(true);

        let numCount = twos.getElementsByTagName('p')[0].innerHTML;
        if ( numCount != "-"){
            let num =parseInt(numCount);
            twos.getElementsByTagName('p')[0].innerHTML = num+1;
        }
        else {
            twos.getElementsByTagName('p')[0].innerHTML = 1;
        }
    }
    if ( rollNum === 3) {

        clone = template3.content.cloneNode(true);

        let numCount = threes.getElementsByTagName('p')[0].innerHTML;
        if ( numCount != "-"){
            let num =parseInt(numCount);
            threes.getElementsByTagName('p')[0].innerHTML = num+1;
        }
        else {
            threes.getElementsByTagName('p')[0].innerHTML = 1;
        }
    }
    if ( rollNum === 4) {

        clone = template4.content.cloneNode(true);

        let numCount = fours.getElementsByTagName('p')[0].innerHTML;
        if ( numCount != "-"){
            let num =parseInt(numCount);
            fours.getElementsByTagName('p')[0].innerHTML = num+1;
        }
        else {
            fours.getElementsByTagName('p')[0].innerHTML = 1;
        }
    }
    if ( rollNum === 5) {

        clone = template5.content.cloneNode(true);

        let numCount = fives.getElementsByTagName('p')[0].innerHTML;
        if ( numCount != "-"){
            let num =parseInt(numCount);
            fives.getElementsByTagName('p')[0].innerHTML = num+1;
        }
        else {
            fives.getElementsByTagName('p')[0].innerHTML = 1;
        }
    }
    if ( rollNum === 6) {

        clone = template6.content.cloneNode(true);

        let numCount = sixes.getElementsByTagName('p')[0].innerHTML;
        if ( numCount != "-"){
            let num =parseInt(numCount);
            sixes.getElementsByTagName('p')[0].innerHTML = num+1;
        }
        else {
            sixes.getElementsByTagName('p')[0].innerHTML = 1;
        }
    }

    rollButton.innerHTML = "";
    rollButton.append(clone);
});