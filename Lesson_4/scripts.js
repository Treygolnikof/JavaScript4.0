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
    savings: false,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert("Ваш бюджет на день составляет " + appData.moneyPerDay + " рублей");
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 400) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 400 && appData.moneyPerDay < 3000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 3000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ""),
                percent = +prompt("Под какой процент?", "");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Месячный доход с вашего депозита составляет " + appData.monthIncome + " рублей.");
        } 
    },
    chooseOptExpenses: function() {
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
    },
    chooseIncome: function() {
        for (let i = 0; i < 1; i++) {   
            let items = prompt("Что принесёт дополнительный доход? (Перечислите через запятую)", "");
            
            if ( typeof(items) === 'string' && items != null && items != '') {
                console.log('done');
                appData.income = items.split(", ");
                appData.income.push(prompt("Может что-то ещё?"));
                appData.income.sort();
            } else {
                alert("Произошла ошибка! Попробуйте ещё раз!");
                i--;
            }
        }

        let div = document.createElement('div');
        div.innerHTML = "Способы доп. заработка: <br>";

        appData.income.forEach(function(item, i) {
            div.innerHTML += [i + 1] + ": " + item + "<br>";
            document.body.appendChild(div);
        });
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}
