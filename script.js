let timerdisplay = document.querySelector('.timerdisplay')
let stopbtn = document.getElementById('stopbtn');
let startbtn = document.getElementById('startbtn');
let resetbtn = document.getElementById('resetbtn');

let msec = 0;
let sec = 0;
let mins = 0;

let timerId = null;

startbtn.addEventListener('click',function(){
    if(timerId !== 'null'){
      clearInterval(timerId);  
    }
    timerId = setInterval(starttimer, 10);
});

stopbtn.addEventListener('click',function(){
    clearInterval(timerId); 
});

resetbtn.addEventListener('click',function(){
    clearInterval(timerId); 
    timerdisplay.innerHTML = `00 : 00 : 00`;
    msec = sec = mins = 0;
});

function starttimer(){
 msec++;
 if(msec == 100){
    msec= 0;
    sec++;
    if(sec == 60){
        sec = 0;
        mins++;
    }
 }

 let msecstring = msec < 10 ? `0${msec}` :msec;
 let secstring = sec < 10 ? `0${sec}` :sec;
 let minsstring = mins < 10 ? `0${mins}` :mins;

timerdisplay.innerHTML = `${minsstring} : ${secstring} : ${msecstring}`;
}