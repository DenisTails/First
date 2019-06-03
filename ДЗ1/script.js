let money = +prompt("Ваш бюджет на месяц?","");
let time = prompt("Введите дату в формате YYYY-MM-DD","");
let appData = {
    Бюджет: money,
    Время: time,
};
let main_cost = prompt("Основная статья расходов в этом месяце?");
let main_count = +prompt("Во сколько обойдётся?");
let expenses = {
    main_cost: main_count
};
let optionalExpenses = {};
let income;
let savings = false;
alert("Расход на 1 день "+(money/30)+" рублей.");