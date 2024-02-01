const counter = document.getElementById("counter");

function calc(counter, value){
    return Number.parseInt(counter.textContent) + value;
}

// decrement
document.getElementById("decrement").addEventListener("click", function(){
    var num =calc(counter, -1);
    if ( num < -5){
        counter.innerText = 5;
    }
    else {
        counter.innerText = num;
    }
});
// increment
document.getElementById("increment").addEventListener("click", function(){
    var num =calc(counter, 1);
    if ( num > 5){
        counter.innerText = -5;
    }
    else {
        counter.innerText = num;
    }
});
// reset
document.getElementById("reset").addEventListener("click", function(){
    counter.innerText = 0;
});