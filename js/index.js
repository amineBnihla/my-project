



document.addEventListener('scroll',function(){

//Fill The Skills

let skills_section = document.querySelector('.skills');
let slides_fill = document.querySelectorAll('.skills .fill');
    if(window.pageYOffset >= skills_section.offsetTop){
        slides_fill.forEach((slide)=>{
         slide.style.width = `${slide.dataset.perc}%`;
        });
    }



//Setting How Much Time We Have For The Event
let events = document.querySelector('.events');
 if(window.pageYOffset >= events.offsetTop){
      let endDate = new Date("Feb 31,2022 16:00:59").getTime();
        let interval = setInterval(()=>{
         let currentDate = new Date().getTime();
         let DateDiff = endDate - currentDate;
    if(DateDiff == 0){
            clearInterval(interval);
        }
        let time = calculateTime(DateDiff);
 document.querySelector('.events .box.days h3').textContent = time.days < 10 ? `0${time.days}`:time.days ;
 document.querySelector('.events .box.hours h3').textContent = time.hours < 10 ? `0${time.hours}`:time.hours ;
 document.querySelector('.events .box.minutes h3').textContent = time.minutes < 10 ? `0${time.minutes}`:time.minutes ;
 document.querySelector('.events .box.seconds h3').textContent = time.seconds < 10 ? `0${time.seconds}`:time.seconds ;
        },1000); 
        }

function calculateTime(Date){
  let days = Math.floor(Date / (1000 * 60 *60 * 24)) ;
        let hours = Math.floor((Date % (1000 * 60 * 60 * 24))/(1000 * 60 *60));
        let minutes = Math.floor((Date % (1000 * 60 * 60 ))/(1000 * 60));
        let seconds = Math.floor((Date % (1000 * 60 ))/(1000));

        return {days,hours,minutes,seconds};
}
        // Add Static Numbers 

let stats = document.querySelector('.awesomeStats');
 if(window.pageYOffset >= stats.offsetTop){
   document.querySelectorAll('.awesomeStats .box h3').forEach((number)=>{
     let goal = number.dataset.num;
        let count = 0; 
        
    let interval = setInterval(()=>{
       
        number.textContent = count;
        if(goal== count){
       clearInterval(interval);
        }
        count++;
        
     },200/goal)
   })


 }
});






