function Calc (){
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
    });
}

module.exports = Calc;