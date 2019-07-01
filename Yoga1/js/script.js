'use strict';
window.addEventListener('DOMContentLoaded', ()=>{

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll(".info-tabcontent");

        function HideTabContent(a){
            for(let i = a; i < tabContent.length; i++){
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

    HideTabContent(1);

    function ShowTabContent(b){
        if (tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', (event)=>{
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')){
            for(let i = 0; i<tab.length; i++){
                if (target == tab[i]){
                    HideTabContent(0);
                    ShowTabContent(i);
                    break;
                }
            }
        }
    });
//Timer

let deadLine = '2019-07-02';

function getTimeRemaining (endTime){
    let t = Date.parse(endTime) - Date.parse(new Date()),
    seconds = Math.floor((t/1000)%60),
    minutes = Math.floor((t/1000/60)%60),
    hours = Math.floor(t/(1000*60*60));

    return{
        'total' : t,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    };
}

function setClock(id,deadLine) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock (){
        let t = getTimeRemaining(deadLine);
        if(t.total<=0){
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
        }else{
            if(t.hours<10)
            {hours.textContent = '0'+t.hours;}
            else
            {hours.textContent = t.hours;}
            if(t.minutes<10)
            {minutes.textContent = '0'+t.minutes;}
            else
            {minutes.textContent = t.minutes;}
            if(t.seconds<10)
            {seconds.textContent = '0'+t.seconds;}
            else
            {seconds.textContent = t.seconds;}
        }
        if(t.total<=0){
            clearInterval(timeInterval);
        }
    }
}

setClock('timer',deadLine);

//Modal window

let more = document.querySelector('.more'),
overlay = document.querySelector('.overlay'),
close = document.querySelector('.popup-close');

more.addEventListener('click', ()=>{
overlay.style.display = 'block';
more.classList.add('more-splash');
document.body.style.overflow = 'hidden';
});

close.addEventListener('click', ()=>{
overlay.style.display = 'none';
more.classList.remove('more-splash');
document.body.style.overflow = '';
});

let btnmore = document.querySelectorAll('.description-btn');

for(let i = 0; i<btnmore.length;i++){
btnmore[i].addEventListener('click',()=>{
overlay.style.display = 'block';
document.body.style.overflow = 'hidden';
});
}

//Form

let massege = {
    loading: 'Идёт отправка...',
    complete: 'Спасибо что подождали, оправка завершена!',
    failure: 'Ой... Что-то пошло не так...'
};

let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input');

let statusMassage = document.createElement('div');
statusMassage.classList.add('status');

let form2 = document.getElementById('form');

form2.addEventListener('submit',(event)=>{
    event.preventDefault();
    form2.appendChild(statusMassage);

    let request = new XMLHttpRequest();
    request.open('POST','server.php');
    request.setRequestHeader('Content-Type','application/json; charset =utf-8');

    let obj={};

    let formData2 = new FormData();

    formData2.forEach((value, key)=>{
        obj[key] = value;
    });

    let json = JSON.stringify(obj);

    request.send(json);

    request.addEventListener('readystatechange', ()=>{
        if(request.readyState < 4){
            statusMassage.innerHTML = massege.loading;
        } else if (request.readyState === 4 && request.status == 200){
            statusMassage.innerHTML =massege.complete;
        } else{
            statusMassage.innerHTML =massege.failure;
        }
    });
});

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    form.appendChild(statusMassage);

        let formData1 = new FormData();
        let request = new XMLHttpRequest();
        function postData(data){
        return new Promise((resolve,reject)=>{ request.open('POST','server.php');
        request.setRequestHeader('Content-Type','application/json; charset =utf-8');
    
        let obj={};
    
        
    
        formData1.forEach((value, key)=>{
            obj[key] = value;
        });
    
        let json = JSON.stringify(obj);
    
        request.send(json);
    
        request.addEventListener('readystatechange', ()=>{
            if(request.readyState < 4){
                resolve();
            } else if (request.readyState === 4 && request.status == 200){
                resolve();
            } else{
                reject();
            }
    });
});
}
postData(formData1).then(()=>{
    statusMassage.innerHTML = massege.loading;
}).then(()=>{
    statusMassage.innerHTML = massege.complete;
}).catch(()=>{
    statusMassage.innerHTML =massege.failure;
}); 
});

//slider!! : )

let sliderIndex = 1,
    sliders = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

showSlides(sliderIndex);
function showSlides (n){
    if (n>sliders.length){
        sliderIndex = 1;
    }
    if (n<1){
        sliderIndex = sliders.length;
    }

    sliders.forEach((item) => item.style.display = 'none');

    dots.forEach((item) => item.classList.remove('dot-active'));

    sliders[sliderIndex-1].style.display = 'block';
    dots[sliderIndex-1].classList.add('dot-active');
}

function plusSlide (n){
    showSlides(sliderIndex+=n);
}
function currentSlide (n){
    showSlides(sliderIndex=n);
}
prev.addEventListener('click',()=>{
    plusSlide(-1);
});
next.addEventListener('click',()=>{
    plusSlide(1);
});

dotsWrap.addEventListener('click',(event)=>{
    for(let i = 0;i<dotsWrap.length+1;i++){
        if(event.target.classList.contains('dot')&& event.target == dots[i-1]){
            currentSlide(i);
        }
    }
});

//calc

let person = document.querySelectorAll('.counter-block-input')[0],
restDays = document.querySelectorAll('.counter-block-input')[1],
place = document.getElementById('select'),
totalValue = document.getElementById('total'),
personSum = 0,
daySum = 0,
total = 0;


totalValue.innerHTML = 0;

person.addEventListener('input',()=>{
if(restDays.value == ''){
    restDays.value = 0;
    daySum = 0;
}
personSum = +person.value;
if(restDays.value == 0 || person.value == 0){
    daySum = 0;
    personSum = 0;
}else{
    daySum = restDays.value;
    personSum = person.value;
}
total = (+personSum + +daySum)*4000*place.value;
totalValue.innerHTML = total;
if(restDays.value == 0 || restDays.value == ''){
    total = 0;
    totalValue.innerHTML = total;
}
if(restDays.value == ""){
    total = 0;
    totalValue.innerHTML = total;
}
});
restDays.addEventListener('input',()=>{
    if(person.value == ''){
        person.value = 0;
        personSum = 0;
    }
    daySum = +restDays.value;
    if(restDays.value == 0 || person.value == 0){
        daySum = 0;
        personSum = 0;
    }else{
        daySum = restDays.value;
        personSum = person.value;
    }
    total = (+personSum + +daySum)*4000*place.value;
    totalValue.innerHTML = total;
    if(person.value == 0 || person.value == ''){
        total = 0;
        totalValue.innerHTML = total;
    }
    });

    place.addEventListener('change', ()=>{
        total = ((+personSum + +daySum)*4000)*place.value;
        totalValue.innerHTML = total;
    })
});