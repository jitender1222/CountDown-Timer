const input=document.getElementById('input');
const box=document.querySelector('.inner-box');
const minutes=document.querySelector(".min");
const seconds=document.querySelector(".sec");

const btn=document.querySelector('.btn');

let interval;
let minToSec=0;
let inputVal=0;

btn.addEventListener('click',()=>{
   inputVal=input.value;

  if(input.value.length==0){
    alert("Enter your value")
  }
  else{
    // converting minute to seconds

    minToSec=inputVal*60;

    clearInterval(interval);

    interval=setInterval(startTimer,1000);
  }
})

function startTimer(){

  //converting seconds to minute
  console.log(minToSec);

  let min=Math.floor(minToSec/60);

  let sec=minToSec-min*60;

  if(sec>=10){
    seconds.innerHTML=sec;
  }
  else{
    seconds.innerHTML='0'+sec;
  }
  if(min>=10){
    minutes.innerHTML=Math.floor(minToSec/60);
  }
  else{
    minutes.innerHTML='0'+Math.floor(minToSec/60);
  }
  if(minToSec===0){
    clearInterval(interval);
    alert("done");
  }

  minToSec--;
}