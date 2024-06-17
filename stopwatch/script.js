const minutelabel =document.getElementById('minutes');
const secondlabel =document.getElementById('seconds');
const miliseclabel =document.getElementById('miliseconds');

const startbutton=document.getElementById('start')
const stopbutton=document.getElementById('stop')
const pausebutton=document.getElementById('pause')
const resetbutton=document.getElementById('reset')

const laplist=document.getElementById('laplist')


let minutes=0;
let seconds=0;
let miliseconds=0;
let interval;

startbutton.addEventListener('click',startTimer);
stopbutton.addEventListener('click',stopTimer);
pausebutton.addEventListener('click',pauseTimer);
resetbutton.addEventListener('click',resetTimer);

function startTimer(){
    interval= setInterval(updateTimer,10);
    startbutton.disabled=true;
}


function stopTimer(){
    clearInterval(interval);
    addLaplist();
    reTeData();
    startbutton.disabled=false;
}

function pauseTimer(){
    clearInterval(interval);
    pausebutton.disabled=true;
    startbutton.disabled=false;
}

function resetTimer(){
    clearInterval(interval);
    reTeData();
    startbutton.disabled=false;
    
}


function updateTimer(){
    miliseconds++;
    if(miliseconds===100){
            miliseconds=0;
            seconds++;
            if(seconds===60){
                seconds=0;
                minutes++;
                
            }

    }

    displayTimer();
}

function displayTimer(){
    miliseclabel.textContent=padTime(miliseconds);
    secondlabel.textContent=padTime(seconds);
    minutelabel.textContent=padTime(minutes);

}

function padTime(time){
    return time.toString().padStart(2,'0');

}

function reTeData(){
    minutes=0;
    seconds=0;
    miliseconds=0;
    displayTimer();
}


function addLaplist(){
    const lapTime=`${padTime(minutes)}:${padTime(seconds)}:${padTime(miliseconds)}`;
    const listItem= document.createElement('li');
    listItem.innerHTML=`<span>Lap ${laplist.childElementCount+1}:</span>${lapTime}`;

    laplist.appendChild(listItem);
}