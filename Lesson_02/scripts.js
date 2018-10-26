function start() {
    "use strict";

    let money = +prompt("Ваш бюджет на месяц?", ""),
        time = prompt("Введите дату в формате YYYY-MM-DD", "");

    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };

    for (let i = 0; i < 2; i++) {
        let answerExpenses = prompt("Введите обязательную статью расходов в этом месяце", ""),
            answerExpensesBudget = +prompt("Во сколько обойдется?", "");

        if ( typeof(answerExpenses) === 'string' && typeof(answerExpenses) != null && typeof(answerExpensesBudget) != null && answerExpensesBudget != '' && answerExpenses != '' && answerExpenses.length < 50) {
            console.log('done');
            appData.expenses[answerExpenses] = answerExpensesBudget;
        } else {
            alert("Произошла ошибка! Попробуйте ещё раз!");
            i--;
        }
    }

    // let i = 0;
    // while (i < 2) {
    //     let answerExpenses = prompt("Введите обязательную статью расходов в этом месяце", ""),
    //         answerExpensesBudget = +prompt("Во сколько обойдется?", "");

    //     i++;
        
    //     if ( typeof(answerExpenses) === 'string' && typeof(answerExpenses) != null && typeof(answerExpensesBudget) != null && answerExpensesBudget != '' && answerExpenses != '' && answerExpenses.length < 50) {
    //         console.log('done');
    //         appData.expenses[answerExpenses] = answerExpensesBudget;
    //     } else {
    //         alert("Произошла ошибка! Попробуйте ещё раз!");
    //         i--;
    //     }
    // }

    // let i = 0;
    // do {
    //     let answerExpenses = prompt("Введите обязательную статью расходов в этом месяце", ""),
    //         answerExpensesBudget = +prompt("Во сколько обойдется?", "");

    //     i++;
        
    //     if ( typeof(answerExpenses) === 'string' && typeof(answerExpenses) != null && typeof(answerExpensesBudget) != null && answerExpensesBudget != '' && answerExpenses != '' && answerExpenses.length < 50) {
    //         console.log('done');
    //         appData.expenses[answerExpenses] = answerExpensesBudget;
    //     } else {
    //         alert("Произошла ошибка! Попробуйте ещё раз!");
    //         i--;
    //     }
    // }
    // while (i < 2);

    appData.moneyPerDay = appData.budget / 30;

    alert("Ваш бюджет на день составляет " + appData.moneyPerDay + " рублей");

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
start();