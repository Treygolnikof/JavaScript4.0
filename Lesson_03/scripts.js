function start() {
    "use strict";

    let money, time;
    
    function start() {
        money = +prompt("Ваш бюджет на месяц?", "");
        time = prompt("Введите дату в формате YYYY-MM-DD", "");

        while (isNaN(money) || money == "" || money == null) {
            money = +prompt("Ваш бюджет на месяц?", "");
        }
    }
    start();

    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };

    function chooseExpenses() {
        for (let i = 0; i < 2; i++) {
            let answerExpenses = prompt("Введите обязательную статью расходов в этом месяце", ""),
                answerExpensesBudget = +prompt("Во сколько обойдется?", "");
    
            if ( typeof(answerExpenses) === 'string' && answerExpenses != null && answerExpensesBudget != null && 
            answerExpensesBudget != '' && answerExpenses != '' && answerExpenses.length < 50) {
                console.log('done');
                appData.expenses[answerExpenses] = answerExpensesBudget;
            } else {
                alert("Произошла ошибка! Попробуйте ещё раз!");
                i--;
            }
        }
    }
    chooseExpenses();

    function chooseOptExpenses() {
        for (let i = 0; i < 3; i++) {
            let answerOptExpenses = prompt("Введите необязательную статью расходов в этом месяце", "");
    
            if ( typeof(answerOptExpenses) === 'string' && answerOptExpenses != null && answerOptExpenses != '' && answerOptExpenses.length < 50) {
                console.log('done');
                appData.optionalExpenses[i + 1] = answerOptExpenses;
            } else {
                alert("Произошла ошибка! Попробуйте ещё раз!");
                i--;
            }
        }
    }
    chooseOptExpenses();

    console.log(appData.optionalExpenses);

    function detectDayBudget() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);

        alert("Ваш бюджет на день составляет " + appData.moneyPerDay + " рублей");
    }
    detectDayBudget();

    function detectLevel() {
        if (appData.moneyPerDay < 400) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 400 && appData.moneyPerDay < 3000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 3000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    }
    detectLevel();

    function checkSavings() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ""),
                percent = +prompt("Под какой процент?", "");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Месячный доход с вашего депозита составляет " + appData.monthIncome + " рублей.");
        }
    }
    checkSavings();
} 
start();