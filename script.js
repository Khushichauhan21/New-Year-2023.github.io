
const countdown =()=>{
  
    const countDate= new Date("January 01,2023 00:00:00").getTime();
  const now=new Date().getTime();
  const gap=countDate-now;
  
  //how time works
  const second=1000;//how many mili seconds in 1 second
  const minutes=second*60;
  const hour=minutes*60;
  const day=hour*24;

  //calculting the gap
  const textday=Math.floor(gap/day);
  const texthour=Math.floor((gap%day)/hour);
  const textMinutes=Math.floor((gap%hour)/minutes);
  const textseconds=Math.floor((gap%minutes)/second);

    document.querySelector(".day").innerHTML=textday;
    document.querySelector(".hour").innerHTML=texthour;
    document.querySelector(".minutes").innerHTML=textMinutes;
    document.querySelector(".seconds").innerHTML=textseconds;
   
 
 
  

}
//run the countdown function multiple times

setInterval(countdown,1000);

