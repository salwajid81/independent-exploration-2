// number of seconds that have passed
let time = 0;
// reference to the <span> containing the number
let counterElement = document.getElementById("time");

//Function updates the counterElement Span Tag so that it can be linked to the time counter in JS.
function updateTime(){
    counterElement.innerHTML = time;
    time++
}
// setInterval(the function , time in ms) I used 1000 since it is 1 second
setInterval(updateTime,1000);