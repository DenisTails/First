"use strict";
function detectDayBudget (money){
alert("Расход на 1 день "+(money/30)+" рублей.");    
}

function detectLevel(main_cost, main_count, money){
    alert("После траты на "+main_cost+" останется "+(money-main_count)+" рублей.");
    return money-main_count;
}

function chooseOptExpenses (optionalExpenses){
for(let i = 1;i<4;i++) {
 optionalExpenses[i] = prompt("Не обязательная статья расходов в этом месяце?");   
}
return optionalExpenses;
}

let money = +prompt("Ваш бюджет на месяц?","");
let time = prompt("Введите дату в формате YYYY-MM-DD","");
let appData = {
    Бюджет: money,
    Время: time,
};
let main_cost = prompt("Основная статья расходов в этом месяце?");
let main_count = +prompt("Во сколько обойдётся?");
let expenses = {
    main_cost: main_count,
};
let optionalExpenses = {
    1:null,
    2:null,
    3:null
};
let income;
let savings = false;
detectDayBudget(money);
income = detectLevel(main_cost,main_count,money);
optionalExpenses = chooseOptExpenses(optionalExpenses);
console.log(optionalExpenses);
