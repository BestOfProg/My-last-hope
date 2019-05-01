let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budjet : money,
    expenses : {},
    optionalExpenses : {},
    income : [],
    timeData : time,
    savings : false
};

let a1 =  prompt ("Введите обязательную статью расходов в этом месяце", ""),
    a2 = prompt ("Во сколько это обойдется", ''),
    a3 = prompt ("Введите обязательную статью расходов в этом месяце", ""),
    a4 = prompt ("Во сколько это обойдется", '');

appData.expenses.a1 = a2;
appData.expenses.a1 = a2;

alert (appData.budjet / 30);

