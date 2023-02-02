const aboutUsData00 = document.querySelector('.about-us-data00');
const aboutUsData01 = document.querySelector('.about-us-data01');
const now = new Date();

function newDate(){
    const yearSpan = document.createElement('span');
    const monthSpan = document.createElement('span');
    const daySpan = document.createElement('span');
    const dayNameSpan = document.createElement('span');

    aboutUsData00.appendChild(dayNameSpan);
    aboutUsData00.appendChild(monthSpan);
    aboutUsData00.appendChild(daySpan);
    aboutUsData00.appendChild(yearSpan);

    dayNameSpan.setAttribute('class', 'span1');
    daySpan.setAttribute('class', 'span2');
    monthSpan.setAttribute('class', 'span3');
    yearSpan.setAttribute('class', 'span4');

    const year = now.getFullYear();
    const month = now.getMonth();
    const dayName = now.getDay();
    const day = now.getDate();

    daySpan.innerText = day.toString().padStart(2,'0');
    yearSpan.innerText = year;
    const months = ['January', 'February', 'March','April','May', 'June', 'July', 'August', 'October', 'November', 'December'];
    for(let i = 0; i < months.length; i++){
        if(month === i){
            monthSpan.innerText = months[i];
        }
    }
    const days = ['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for(let i = 0; i < days.length; i++){
        if(dayName === i){
            dayNameSpan.innerText = days[i];
        }
    }
}
newDate();

let counts = setInterval(peopleData);
let start = 0;
let people = (now.getFullYear()) * (now.getMonth() + now.getDate())
function peopleData(){
 aboutUsData01.innerText = ++start;
 if(start === people){
    clearInterval(counts);
 }   
}